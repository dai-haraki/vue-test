<template>
<!-- ※トグルボタンが効かないためbootstrap-vue側のカスタムタグを利用 -->
<b-navbar toggleable="md" type="dark" variant="info" class="sticky-top">
  <!-- トグルボタンの位置はbrand-nameの位置で変更する -->
  <b-navbar-brand to="/"><font-awesome-icon icon="home"/></b-navbar-brand>
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-item to="/users">User</b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>
