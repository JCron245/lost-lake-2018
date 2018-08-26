<template>
  <div class="home">
    <HomeComponent msg="Lost Lake Resort"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue'

export default {
  name: 'home',
  components: {
    HomeComponent
  }
}
</script>
