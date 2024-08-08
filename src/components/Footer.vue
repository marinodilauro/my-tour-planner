<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};

</script>

<template>

  <footer class="d-flex flex-wrap justify-content-between align-items-center p-3 mt-4 border-top bg_color_secondary">
    <div class="col-md-4 d-flex align-items-center">
      <span class="mb-0 montserrat-regular text-body-secondary">© 2024 Marino di Lauro</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-body-secondary" href="#">
          <i class="bi bi-twitter-x"></i>
        </a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#">
          <i class="bi bi-instagram"></i>
        </a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#">
          <i class="bi bi-linkedin"></i>
        </a></li>
    </ul>
  </footer>

</template>

<style scoped></style>
