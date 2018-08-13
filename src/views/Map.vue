<template>
  <div class="map">
    <map-component msg="Map Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MapComponent from '@/components/MapComponent.vue'

export default {
  name: 'resortmap',
  components: {
    MapComponent
  }
}
</script>
