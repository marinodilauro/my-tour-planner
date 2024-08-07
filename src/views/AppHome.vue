<script>
import NewTourCard from '../components/NewTourCard.vue';
import TourCard from '../components/TourCard.vue';
import { state } from '../state.js';

export default {
  name: "AppHome",
  components: {
    NewTourCard,
    TourCard
  },
  data() {
    return { state }
  }
};
</script>

<template>
  <div class="container my-3">

    <section v-if="state.travels.length === 0">
      <h2 class="mb-4 nunito-bold">Aggiungi un viaggio</h2>
      <div class="row">
        <div class="col d-flex justify-content-center">
          <NewTourCard />
        </div>
      </div>
    </section>

    <section v-else>
      <h2 class="mb-4 nunito-bold">I tuoi viaggi</h2>
      <div class="row row-cols-1 g-5">
        <div v-for="travel in state.travels" class="col">
          <TourCard :name=travel.name :start_date=travel.start_date :end_date=travel.end_date
            :destination="travel.destination" />
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped></style>