<template>
  <div class="rates">
    <rates-component msg="Rates Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RatesComponent from '@/components/RatesComponent.vue'

export default {
  name: 'rates',
  components: {
    RatesComponent
  }
}
</script>
