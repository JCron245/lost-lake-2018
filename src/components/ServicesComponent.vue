<template>
  <div>
    <h1>{{ servicesTitle }}</h1>
    <p>
      In the summertime the General Store is open on weekends from 7:00am to 10:00pm for 
      your convenience at all other times including most holidays the general store is open 
      7 days a week from 7:00am to 7:00pm.
    </p>
    <p>
      If you need it we have it. The store is always well stocked with a variety of grocery items for 
      just about any type of meal. We serve convenient food you can order from our menu including our 
      most popular, biscuits and gravy, pizza and more.
    </p>
    <p>
      The general store carries clothing apparel for all sizes and seasons. As well as unique gifts 
      and souvenirs. Our hardware department is well stocked with plumbing and electrical supplies. 
      We also carry water craft repair items including oil additives.
    </p>
    <h2>{{ amenitiesTitle }}</h2>
    <div id="amenitiesContainer">
      <ul id="amenitiesList">
        <li>Full RV hook ups</li>
        <li>Gas and Propane</li>
        <li>Launch ramp</li>
        <li>Day use beaches</li>
        <li>Bathrooms</li>
        <li>Showers</li>
        <li>Laundromat</li>
        <li>Storage</li>
      </ul>
      <img src="../assets/general.png" alt="Lost Lake Resort General Store" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesComponent',
  props: {
    servicesTitle: String,
    amenitiesTitle: String
  }
}
</script>

<style scoped lang="scss">
#amenitiesContainer {
  display: flex;
  > div, > ul {
    flex-grow: 1;
    flex-basis: 0;
  }
  img {
    margin-right: 1em;
  }
  @media (max-width: 767.98px) { 
      img {
        display: none;
      }
  }
}
#amenitiesList {
  > li {
    display: list-item;
  }
}
</style>
