<template>
	<div>
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
              <b-nav-item to="/resortmap">Park Map</b-nav-item>
              <b-nav-item to="/contact">Contact Us</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
		<main class="container">
			<router-view/>
		</main>
    <footer class="container fixed-bottom">
      <b-navbar toggleable="md">
      <p id="copyright">© Copyright Lost Lake Resort.</p>
        <b-navbar-nav class="ml-auto">
            <b-nav-item to="/home">Home</b-nav-item>
            <b-nav-item to="/services">Services</b-nav-item>
            <b-nav-item to="/rates">Rates</b-nav-item>
            <b-nav-item to="/resortmap">Park Map</b-nav-item>
            <b-nav-item to="/contact">Contact Us</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </footer>
	</div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style lang="scss">
h1, h2, h3, h4, h5, h6 {
  color: #43578f !important;
}
header {
  margin-bottom: 3em;
  @media (max-width: 767.98px) { 
    margin-bottom: 1em;
  }
}
footer {
  margin-bottom: 2em;
  display: block;
  @media (max-width: 767.98px) { 
    margin-bottom: 0;
    .navbar-nav { 
      display: none;
      }
  }
}
.bg-info {
  background-color: white;
}
nav.navbar {
	align-items: flex-end;
  padding: .5rem 0;
  
  @media (max-width: 991.98px) {
    .nav-item {
      font-size: 1em;
      > .nav-link {
        padding-right: .25rem;
        padding-left: .25rem;
      }
    }
    .navbar-brand {
      margin-right: 0;
    }
  }
}
.nav-item {
  text-decoration: none;
  color: #fff;
  background-color: #43578f;
  text-align: center;
  letter-spacing: 0.5px;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  border-right: 1px solid black;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  font-size: 1.25em;
  padding: 0.33em;
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
</style>

