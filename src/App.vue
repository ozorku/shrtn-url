<template>
  <div id="app">
    <HomePage class="content" />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";

export default {
  name: "app",
  components: {
    HomePage
  }
};
</script>


<style lang="scss">
body {
  background: #20123a;
}
</style>
