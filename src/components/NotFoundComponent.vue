<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>Ooops! Something went wrong or that page doesn't exist.</p>
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

<style scoped lang="scss">
  h1 {
    font-size: 4em;
    width: 100%;
    text-align: center;
    margin: 2em 0 1em 0;
  }
  p {
    font-weight: bold;
    font-size: 1.75em;
    text-align: center;
  }
</style>
