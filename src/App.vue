<template>
  <div id="app">
    <HomePage class="content" @inputData="updateMessage" />
    <Notify v-show="show" />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import Notify from "./components/Notify";

export default {
  name: "app",
  data() {
    return {
      show: false
    };
  },
  components: {
    HomePage,
    Notify
  },
  methods: {
    updateMessage() {
      this.show = true;
    }
  }
};
</script>


<style lang="scss">
body {
  background: #20123a;
}
</style>
