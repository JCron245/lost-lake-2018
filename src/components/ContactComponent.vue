<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      Have any questions, comments, or need to reserve a spot? 
      Here is our contact information so you can call, write, or visit us! 
      We would love to hear from you!
    </p>
    <address class="address">
      <div class="address-section">
        <span>Email: </span>
        <a href="mailto:lostlakeriverresort@gmail.com">
          lostlakeriverresort@gmail.com
        </a>
      </div>
      <div class="address-section">
        <span>Phone: </span>
        <a href="tel:1-760-664-4413">
          1(760)664-4413
        </a>
      </div>
      <div class="address-section">
        <span>Location: </span>
        We are located 31 miles north of Blythe California on highway 95 along the Colorado river.
      </div>
      <div class="address-section">
        <span>Postal Address: </span>
        42500 US HWY 95<br/>
        Blythe CA 92225
      </div>
    </address>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  .address {
    .address-section {
      margin: 1em 0;
      span {
        display: block;
        font-weight: bold;
      }
    }
  }
</style>
