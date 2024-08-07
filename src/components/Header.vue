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
    <img src="../assets/img/travel.svg" alt="">
  </header>

</template>

<style scoped>
header {
  position: relative;

  img {
    height: 12rem;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }

  h1 {
    font-size: 2rem;
    color: #98C1D9;
    position: relative;
    top: 1rem;
    text-align: center;
    transform: translate(0%, 50%);
  }
}
</style>
