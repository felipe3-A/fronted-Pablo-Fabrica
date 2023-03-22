<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld /> 
  <carrusell-component />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CarrusellComponent from '../components/CarrusellComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CarrusellComponent
  }
}
</script>
