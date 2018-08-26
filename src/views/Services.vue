<template>
  <div class="services">
    <services-component servicesTitle="Services" amenitiesTitle="Amenities"/>
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
