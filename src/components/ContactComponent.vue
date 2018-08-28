<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      Have any questions, comments, or need to reserve a spot? 
      Here is our contact information so you can call, write, or visit us! 
      We would love to hear from you!
    </p>
    <address>
      <div>
        <span>Email: </span><a href="mailto:lostlakeriverresort@gmail.com">lostlakeriverresort@gmail.com</a>
      </div>
      <div>
        <span>Phone: </span><a href="tel:1-760-664-4413">1(760)664-4413</a>
      </div>
      <div id="locationSection">
        <span>Location: </span>
        We are located 31 miles north of Blythe California on highway 95 along the Colorado river.
      </div>
      <div id="postalSection">
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
  #locationSection {
    margin: 1em 0;
  }
  #locationSection, #postalSection {
    > span {
      display: block;
    }
  }
  address {
    > div {
      > span {
        font-weight: bold;
      }
    }
  }
</style>
