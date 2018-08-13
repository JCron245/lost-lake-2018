<template>
  <div class="services">
    <services-component msg="Services Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ServicesComponent from '@/components/ServicesComponent.vue'

export default {
  name: 'services',
  components: {
    ServicesComponent
  }
}
</script>
