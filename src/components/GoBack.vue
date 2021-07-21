<template>
  <span class="go_back">
      <button class="button" @click="back">Back</button>
  </span>
</template>

<script>
export default {
    methods:{
        back(){
            return this.$router.go(-1);
        }
    }
}
</script>

<style>
.go_back{
    display:flex;
  
}
.button{
    border: 0;
    background-color: pink;
    padding:.5rem 1rem;
    border-radius: 5px;
    font-weight:bold;
    color:rgb(209, 9, 49);
      cursor: pointer;
}
</style>