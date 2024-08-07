<script>
import NewTourCard from '../components/NewTourCard.vue';

export default {
  name: "AppHome",
  components: {
    NewTourCard
  },
  data() {
    return {
    };
  }
};
</script>

<template>
  <div class="container my-3">
    <div class="row ">
      <div class="col d-flex justify-content-center">
        <NewTourCard />
      </div>
    </div>
  </div>
</template>

<style scoped></style>