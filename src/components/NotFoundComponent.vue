<template>
  <div>
    <h1 style="width: 100%; text-align: center; margin-bottom: 2em;">{{ msg }}</h1>
    <p style="font-weight: bold; font-size: 1.75em; text-align: center;">Ooops! Something went wrong or that page doesn't exist.</p>
    <div style="width: 100%; font-size: 8em; text-align: center;">&#9785;</div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1 {
    font-size: 2.75em;
  }
</style>
