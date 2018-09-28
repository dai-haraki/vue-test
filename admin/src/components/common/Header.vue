<template>
<!-- <nav>
  <router-link to="/">Home</router-link>
  <router-link to="/users">User</router-link>
</nav> -->
<nav class="navbar navbar-expand-md navbar-light bg-light">
  <!-- <a class="navbar-brand" href="#">Navbar</a> -->
  <router-link to="/" class="nav-link navbar-brand"><font-awesome-icon icon="home"/></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <!-- <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li> -->
      <li class="nav-item">
        <router-link to="/users" class="nav-link">User</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>
