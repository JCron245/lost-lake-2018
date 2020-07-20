<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      Call us at <a href="tel:1-760-664-4413">(760) 664-4413</a> or visit our Contact page and reserve your spot today!
    </p>
    <img src="../assets/map.png" style="width: 100%;" rel="preload" alt="Map of campground spots at Lost Lake Resort"/>
  </div>
</template>

<script>
export default {
  name: 'MapComponent',
  props: {
    msg: String
  }
}
</script>
