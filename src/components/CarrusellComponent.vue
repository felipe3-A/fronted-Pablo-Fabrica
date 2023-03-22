<template>

  <main>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/tada.jpg" class="imagen " alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/img.jpg" class="imagen" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/im2.jpg" class="imagen" alt="..." />
        </div>

      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >

        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    
  </main>
  
</template>
<script>
export default {
  name: "ComponeteCarrusel",
};
</script>
<style scoped>
h1 {
  background-color: violet;
}
.imagen{
  width: 50%;
}
</style>
