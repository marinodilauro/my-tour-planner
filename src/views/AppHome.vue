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
  <div class="container mt-5">

    <template v-if="state.travels.length === 0">

      <div class="banner px-4 text-center">
        <div class="col-lg-6 mx-auto">

          <img src="../assets/img/homepage2.svg" class="position-absolute" alt="World with pointer" loading="lazy">

          <h2 class="nunito-bold">Esplora, Pianifica, Parti!</h2>

          <p class="montserrat-regular mb-4">
            Organizza i tuoi viaggi da sogno in modo semplice e intuitivo. Crea itinerari personalizzati, aggiungi
            tappe, scopri curiosità locali e visualizza tutto su mappa. Preparati a partire con la tua avventura
            perfetta, sempre a portata di mano!
          </p>

          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" class="button button_primary nunito-bold me-sm-3">
              <span class="button_top">
                Crea il tuo primo viaggio!
                <i class="bi bi-airplane"></i>
              </span>
            </button>
          </div>

        </div>
      </div>
    </template>

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

<style scoped>
.banner {
  height: 500px;

  img {
    filter: opacity(0.3);
    width: 670px;
    top: -70px;
    left: -145px;
    z-index: -1;
    transform: translate(0%, 50%);
  }

  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.2rem;
  }
}

h2 {
  color: #293241;
}
</style>