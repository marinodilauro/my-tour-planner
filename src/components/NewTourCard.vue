<script>
export default {
  name: "NewTourCard",
  data() {
    return {}
  }
};

</script>

<template>

  <div class="d-flex flex-column alignt-items-center justify-content-center">
    <div class="new_tour_card d-flex justify-content-center">
      <i class="bi bi-plus-lg"></i>
    </div>
  </div>

</template>

<style scoped>
.new_tour_card {
  width: 100%;
  height: 200px;
  border-radius: 30px;
  background-color: #fbfaff;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 15px 15px 30px #bebebe;

  span {
    font-size: 1.5rem;
  }

  i {
    font-size: 7rem;
  }
}
</style>
