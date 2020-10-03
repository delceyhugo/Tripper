<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from "./views/Home"

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    'home' : Home,
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  background-color: #202020f1;
  color: beige;
}
</style>
