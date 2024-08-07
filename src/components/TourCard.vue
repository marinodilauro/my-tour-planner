<script>
import { state } from '../state.js';

export default {
  name: "TourCard",
  props: {
    'name': String,
    'start_date': String,
    'end_date': String,
    'destination': String,
  },
  data() {
    return { state }
  }
};

</script>

<template>

  <div class="tour_card d-flex flex-column justify-content-center alignt-items-center gap-3 p-4">

    <span class="title nunito-bold">{{ name }}</span>

    <div class="body d-flex flex-column gap-2">
      <span class="start_date">Data partenza: {{ start_date }}</span>
      <span class="end_date">Data arrivo: {{ end_date }}</span>
      <span class="destination">Destinazione: {{ destination }}</span>
    </div>

  </div>

</template>

<style scoped>
.tour_card {
  width: 100%;
  height: 200px;
  border-radius: 30px;
  background-color: #fbfaff;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 15px 15px 30px #bebebe;

  .title {
    font-size: 1.5rem;
  }

  i {
    font-size: 7rem;
  }
}
</style>
