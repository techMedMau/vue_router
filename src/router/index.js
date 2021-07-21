import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";
// import Brazil from '../views/Brazil';
// import Panama from "../views/Panama";

Vue.use(VueRouter);


const router = new VueRouter({
  // mode: 'history',
  linkExactActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
  },
  routes: [
    // {
    //   path: "/brazil",
    //   name: "brazil",
    //   component: () => import(/* webpackChunkName: "brazil" */ "../views/Brazil.vue")
    // },
    // {
    //   path: "/panama",
    //   name: "panama",
    //   component: Panama
    // },
    {
      path: "/",
      name: "Home",
      component: Home,
      props: true
    },
    {
      path: "/destination/:slug",
      name: "DesDetails",
      props: true,
      component: () => import(/* webpackChunkName: "details" */ "../views/DesDetails.vue"),
      children: [
        {
          path: ":experienceSlug",
          name: "ExpDetails",
          component: () => import(/* webpackChunkName: "expDetails" */ "../views/ExpDetails.vue"),
          props: true
        },
      ],
      beforeEnter: (to, from, next) => {
        const exist = store.destinations.find(
          destination => destination.slug === to.params.slug
        )
        if (exist) {
          next()
        } else {
          next({ name: 'notFound' });
        }
      }


    }, {
      path: "/login",
      name: "login",
      component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue")

    },
    {
      path: "/user",
      name: "user",
      component: () => import(/* webpackChunkName: "user" */ "../views/User.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/invoices",
      name: "invoices",
      component: () => import(/* webpackChunkName: "invoices" */ "../views/Invoices.vue"),
      meta: {
        requiresAuth: true
      }

    },
    {
      path: "/404",
      alias: "*",
      name: "notFound",
      component: () => import(/* webpackChunkName: "notFound" */ "../views/NotFound.vue"),
      props: true
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.user) {
      next({
        name: "login",
        query: { redirect: to.fullPath }
      })
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;