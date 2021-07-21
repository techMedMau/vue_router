<template>
  <nav id="nav">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamiaca</router-link>
    <router-link to="/panama">Panama</router-link> -->
    <ul class="nav_links">
        <li class="links">
            <router-link to="/">Home</router-link>
        </li>
        <li v-for="destination in destinations" :key="destination.name" class="links">
            <router-link :to="{name: 'DesDetails', params:{slug: destination.slug}}">
                {{destination.name}}
            </router-link>
        </li>
        <li class="links">
             <router-link to="/user">Dashboard</router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store";
export default{
    data(){
        return{
            desId: this.$route.params.id,
            destinations: store.destinations
        };
    }
}
</script>

<style scoped>
.nav_links{
display: flex;
justify-content: center;
list-style: none;
padding: 30px;
}



#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 1rem;
  padding: .5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
  background-color: rgba(182, 220, 241, 0.7);
}

#nav a.active {
  color: #687e9c;
}
</style>