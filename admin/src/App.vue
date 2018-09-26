<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/users">User</router-link>
    </nav>
    <!-- ここにパスと一致したコンポーネントが埋め込まれる -->
    <router-view/>
  </div>
</template>
