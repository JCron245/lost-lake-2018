<template>
	<div id="appwrap">
    <header class="container">
      <b-navbar toggleable="md">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand to="/home">
          <img src="./assets/logo_small.png" alt="The Lost Lake Resort logo" id="headerLogo">
        </b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
              <b-nav-item to="/home">Home</b-nav-item>
              <b-nav-item to="/services">Services</b-nav-item>
              <b-nav-item to="/rates">Rates</b-nav-item>
              <b-nav-item to="/resortmap">Map</b-nav-item>
              <b-nav-item to="/contact">Contact Us</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
		<main class="container">
			<transition 
				name="fade" 
				mode="out-in" 
				@beforeLeave="beforeLeave" 
				@enter="enter" 
				@afterEnter="afterEnter">
				<router-view/>
			</transition>
		</main>
    <footer class="container">
      <b-navbar toggleable="md">
				<p id="copyright">© Copyright Lost Lake Resort.</p>
        <b-navbar-nav class="ml-auto">
            <b-nav-item to="/home">Home</b-nav-item>
            <b-nav-item to="/services">Services</b-nav-item>
            <b-nav-item to="/rates">Rates</b-nav-item>
            <b-nav-item to="/resortmap">Map</b-nav-item>
            <b-nav-item to="/contact">Contact Us</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </footer>
	</div>
</template>

<script>
import bNavbar from "bootstrap-vue/es/components/navbar/navbar";
import bNavbarNav from "bootstrap-vue/es/components/navbar/navbar-nav";
import bNavbarBrand from "bootstrap-vue/es/components/navbar/navbar-brand";
import bNavbarToggle from "bootstrap-vue/es/components/navbar/navbar-toggle";
import bCollapse from "bootstrap-vue/es/components/collapse/collapse";
import bNavItem from "bootstrap-vue/es/components/nav/nav-item";

export default {
  name: "app",
  components: {
    "b-navbar": bNavbar,
    "b-navbar-nav": bNavbarNav,
    "b-navbar-brand": bNavbarBrand,
    "b-navbar-toggle": bNavbarToggle,
    "b-collapse": bCollapse,
    "b-nav-item": bNavItem
	},
	data() {
    return {
      prevHeight: 0,
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
};
</script>


<style lang="scss">
#appwrap {
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
}
header {
  margin-bottom: 3em;
  @media (max-width: 767.98px) {
    margin-bottom: 1em;
  }
}
footer {
  display: block;
  @media (max-width: 767.98px) {
    .navbar-nav {
      display: none;
    }
  }
}
nav.navbar {
  align-items: flex-end;
  padding: .5rem 0;

  @media (max-width: 991.98px) {
    .nav-item {
      font-size: 1em;
      > .nav-link {
				padding: .75em;
      }
    }
    .navbar-brand {
      margin-right: 0;
    }
  }
}
.nav-item {
  background-color: #43578f;
  text-align: center;
  letter-spacing: .5px;
  transition: background-color .2s ease-out;
  border-right: 1px solid black;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .2);
  font-weight: 500;
  &:hover {
    background-color: #6579af;
    > a.nav-link {
      color: black !important;
    }
  }
  &:last-child {
    border-right: none;
  }
  > a.nav-link {
    color: #eee !important;
		padding: 1em;
		&.active {
				background-color: #6579af;
				color: black !important;
		}
  }
}
#headerLogo {
  position: relative;
  top: .5em;
}
@media (max-width: 767.98px) {
  #headerLogo {
    margin-bottom: .3em;
  }
}
#copyright {
  font-size: .75em;
}
.fade-enter-active,.fade-leave-active {
  transition-duration: .29s;
  transition-property: height, opacity;
  transition-timing-function: ease;
	overflow: hidden;
}
.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
