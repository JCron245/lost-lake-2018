<template>
  <div class="contact">
    <contact-component msg="contact Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactComponent from '@/components/ContactComponent.vue'

export default {
  name: 'contact',
  components: {
    ContactComponent
  }
}
</script>
