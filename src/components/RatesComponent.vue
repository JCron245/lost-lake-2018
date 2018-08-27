<template>
  <div id="ratesPage">
    <h1>Rates</h1>
      We have two different seasons with different rates for full RV Hook-Ups. Call us at 
      <a href="tel:1-760-664-4413">(760) 664-4413</a> or visit our Contact page and reserve your spot today!
    <div id="ratesContainer">
      <div>
        <h2 id="summerTitle" aria-describedby="summerDates">Summer Season <sun-icon id="sunIcon" class="icon" aria-hidden="true"></sun-icon></h2>
        <div id="summerDates">April 1st to September 30th</div>
        <p id="summerSub">Full RV Hook-Up</p>
        <dl id="summerList" aria-labelledby="summerSub">
          <dt>Daily:</dt>
          <dd>$33 + tax</dd>
          <dt>Weekly:</dt>
          <dd>$180 + tax</dd>
          <dt>2 Weeks:</dt>
          <dd>$340 + tax</dd>
          <dt>Monthly:</dt>
          <dd>$650 + tax</dd>
        </dl>
      </div>
      <div>
        <h2 id="winterTitle" aria-describedby="winterDates">Winter Season <loader-icon id="loaderIcon" class="icon" aria-hidden="true"></loader-icon></h2>
        <div id="winterDates">October 1st to March 31st</div>
        <p id="winterSub">Full RV Hook-Up</p>
        <dl id="winterList" aria-labelledby="winterSub">
          <dt>Daily:</dt>
          <dd>$33 + tax</dd>
          <dt>Weekly:</dt>
          <dd>$180 + tax</dd>
          <dt>Monthly:</dt>
          <dd>$280 + tax</dd>
        </dl>
      </div>
    </div>
    <div>
      <h2 id="checkInTitle">Check In Times <clock-icon id="clockIcon" class="icon" aria-hidden="true"></clock-icon></h2>
      <dl id="checkInList" aria-labelledby="checkInTitle">
        <dt>Check In Time:</dt>
        <dd>6:00pm</dd>
        <dt>Check Out Time:</dt>
        <dd>4:00pm</dd>
      </dl>
    </div>
    <div>
      <h2 id="storageTitle">Storage <archive-icon id="archiveIcon" class="icon" aria-hidden="true"></archive-icon></h2>
      <dl id="storageList" aria-labelledby="storageTitle">
        <dt>Monthly Storage:</dt>
        <dd>$45</dd>
      </dl>
    </div>
    <p>
      <book-open-icon id="bookIcon" class="icon" aria-hidden="true"></book-open-icon>
      <span id="note">Please note:</span> 
      ALL reservations must be paid for in advance.
    </p>
    <p>
      <zap-off-icon id="bookIcon" class="icon" aria-hidden="true"></zap-off-icon>
      <span id="cancellation">Cancellation Policy:</span> 
      We require <em>at minimum a 2 week notice</em> prior to arrival in order to receive a refund minus a $10.00 processing fee.
    </p>
  </div>
</template>

<script>
import { SunIcon, BookOpenIcon, ClockIcon, LoaderIcon, ZapOffIcon, ArchiveIcon } from "vue-feather-icons";

export default {
  name: 'RatesComponent',
  props: {
    msg: String
  },
  components: {
    SunIcon,
    ClockIcon,
    ArchiveIcon,
    BookOpenIcon,
    LoaderIcon,
    ZapOffIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #ratesPage {
    > div {
      margin-bottom: 2em;
    }
  }
  #ratesContainer {
    display: flex;
    padding-top: 1em;
    @media (max-width: 575.98px) { 
      flex-direction: column;
    }
    > div {
      display: block;
      padding: 1.5em;
      flex-grow: 1;
      flex-basis: 0;
      border: 1px solid #BBB;
      margin: 0 1em;
      @media (max-width: 767.98px) { 
        padding: .75em;
        margin: 0 .25em;
      }
      @media (max-width: 575.98px) { 
        padding: .65em;
        margin: 0.25em .25em;
      }
    }
  }
  .icon {
    margin-bottom: .2em;
    color: black;
  }
  #sunIcon {
    color: #ffb74d;
  }
  #loaderIcon {
    color: #009688;
  }
  #bookIcon {
    margin-right: .2em;
  }
  #summerTitle, #winterTitle {
    width: 100%;
    text-align: center;
  }
  #summerDates, #winterDates {
    font-weight: bold;
    margin-bottom: 1em;
    text-align: center;
  }
  #winterSub, #summerSub {
    font-weight: bold;
    text-decoration: underline;
  }
  #checkInList, #storageList {
      max-width: 40%;
      display: grid;
      grid-template-columns: 50% 50%;
      @media (max-width: 991.98px) { 
        max-width: 60%;
      }
      @media (max-width: 767.98px) { 
        max-width: 100%;
      }
  }
  #note, #cancellation {
    color: #444;
    font-weight: bold;
  }
  h1 {
    font-size: 2.75em;
  }
  h2 {
    font-size: 2em;
  }
  a {
    font-weight: bold;
    text-decoration: underline;
    color: #43578f;
  }
  #winterList, #summerList {
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>
