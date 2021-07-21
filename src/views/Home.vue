<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link :to="{name: 'DesDetails', params:{slug:destination.slug}}">
          <h2>{{ destination.name }}</h2></router-link
        >
        <figure>
          <router-link :to="{name: 'DesDetails', params:{slug:destination.slug}}">
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
//@ 就是指src
import store from "@/store.js";

export default {
  name: "Home",
  components: {},
  data() {
    return { destinations: store.destinations };
  },
};
</script>

<style scoped>
.home{
  max-width:1400px;
  margin: 0 auto;
}

img{
  max-width:200px;
}
.destinations{
  display: flex;
  justify-content: space-between;
}

a{
  text-decoration: none;
  color: #2c3e50;
}

a:hover{
  color: #687e9c;
  text-decoration: underline;
}

</style>