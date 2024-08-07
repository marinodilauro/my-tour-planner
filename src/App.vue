<script>
import { RouterLink, RouterView } from "vue-router";
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <Header></Header>
  <RouterView title="My Tour Planner"></RouterView>
  <Footer></Footer>
</template>

<style></style>