<script>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
    }
  }
}

</script>

<template>
  <AppHeader></AppHeader>
  <RouterView title="My Tour Planner"></RouterView>
  <AppFooter></AppFooter>
</template>

<style></style>