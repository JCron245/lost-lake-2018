<template>
	<div>
    <header>
      <b-navbar toggleable="md">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand to="/home"><img src="./assets/logo_small.png" alt="The Lost Lake Resort logo" style="position: relative; top: .5em;"></b-navbar-brand>
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
			<router-view/>
		</main>
	</div>
</template>

<script>
</script>


<style lang="scss">
.bg-info {
  background-color: white;
}
.container {
	border: 1px solid black;
}
nav.navbar {
	align-items: flex-end;
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
</style>

