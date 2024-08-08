<script>
export default {
  name: "Header",
  data() {
    return {
    };
  }
};

</script>

<template>

  <header>
    <h1 class="nunito-extrabold">My Tour Planner</h1>
    <img src="../assets/img/homepage1.svg" alt="">
  </header>

</template>

<style scoped>
header {
  position: relative;

  img {
    height: 12rem;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  h1 {
    padding-top: 1rem;
    font-size: 2rem;
    color: #98C1D9;
    text-align: center;
  }
}
</style>
