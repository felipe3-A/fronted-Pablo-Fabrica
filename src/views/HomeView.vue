<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  <carrusell-component />
  </div>
</template>

<script>
// @ is an alias to /src
import CarrusellComponent from '../components/CarrusellComponent.vue'

export default {
  name: 'HomeView',
  components: {
    CarrusellComponent
  }
}
</script>
