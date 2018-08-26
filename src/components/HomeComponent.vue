<template>
  <div>
    <h1 id="pageTitle">{{ msg }}</h1>  
    <div id="carouselWrapper">
      <b-carousel id="carousel1"
        style="text-shadow: 1px 1px 2px #333;"
        controls
        indicators
        background="#ababab"
        :interval="4000"
        img-width="100%"
        img-height="480"
        v-model="slide"
      >
        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" src="../assets/slider1.jpg" alt="image slot">
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" src="../assets/slider2.jpg" alt="image slot">
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" src="../assets/slider3.jpg" alt="image slot">
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" src="../assets/slider4.jpg" alt="image slot">
        </b-carousel-slide>
      </b-carousel>
    </div>
    <p>
      A river front community and vacation resort on the Colorado River located just 31 miles 
      north of Blythe CA on Hwy 95. Lost Lake River Resort is a popular destination for all 
      water sport recreation. Everything from boating, wake boarding, and jet skiing, to 
      fishing and tubing.
    </p>
    <p>
      Lost Lake Resort is a place where family and friends meet for year round fun. Our 
      Resort is equipped with full RV hook ups as well as spots for tent camping. We also 
      have clean restrooms with hot showers conveniently located throughout the park. Lost 
      Lake also has its own general store providing everything you need to have a great time!
    </p>
    <p>
      Vacationers will find our boat launching ramp is easily accessible, allowing for more 
      time to play and relax in the water. Plan on bringing your rafts, floats, coolers, and 
      chairs to our day use area where you can spend a day soaking in the sun and relaxing to 
      your fullest extent. After a long day of fun in the sun you can enjoy sitting around a 
      camp-fire gazing at the millions of stars in our beautiful and clear California skies.
    </p>
    <p>
      We have great weather all year long. Our summers are sunny and hot, and the winter daily 
      temperatures are on average of 70 °F. Flocks of snow-birds soar in year after year during 
      the winter to meet up with their friends from across the country at our resort.
    </p>
    <p>
      Make a reservation today and find out why Lost Lake Resort is the greatest place under the sun!
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  props: {
    msg: String
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#pageTitle {
  color: #43578f;
  font-size: 2.75em;
}
#carouselWrapper {
  margin-bottom: 1em;
  margin-top: 1em;
}
</style>
