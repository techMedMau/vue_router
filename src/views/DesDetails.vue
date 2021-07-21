<template>
  <div>
      <Back />
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="details">
        <img
          :src="require(`@/assets/${destination.image}`)"
          :alt="destination.name"
        />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div id="experience" class="cards">
        <div
          v-for="experience in destination.experiences"
          :key="experience.slug"
          class="card"
        >
        <router-link :to="{name: 'ExpDetails', params:{ experienceSlug: experience.slug}, hash:'#experience'}">
        <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name" />
        <span class="card_text">{{ experience.name }}</span>
        </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>

import store from "@/store.js";
import Back from "@/components/GoBack";
export default {
    components: {Back},
  data() {
    return {
      // slug: this.$route.params.slug
    };
  },
  props: {
    slug: { type: String, required: true },
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.slug,
      );
    },
  },
};
</script>

<style>
.cards,.details{
    display: flex;
}

.details{
  padding: 3%;
}


.cards img{
    
    max-height: 200px;
}

.card{
    padding: 0 20px;
    position: relative;
}

.card_text{
    position: absolute;
    top:50%;
    left:10%;
    color:#fff;
    font-size:25px;
    font-weight:bold;
    text-decoration: none;
}
</style>