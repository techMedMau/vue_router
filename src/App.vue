<template>
  <div id="app">
    <TheNavi />
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path" />
      </transition>
    
  </div>
</template>

<script>
import TheNavi from "@/components/TheNavi";
export default {
  components: { TheNavi },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter .fade-leave-to {
  opacity: 0;
}

.input{
  border: 1px solid gray;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 20px;
}

.btn{
  padding: 10px;
}

</style>
