<template>
  <div class="notfound">
    <not-found-component msg="404 Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NotFoundComponent from '@/components/NotFoundComponent.vue'

export default {
  name: 'notfound',
  components: {
    NotFoundComponent
  }
}
</script>
