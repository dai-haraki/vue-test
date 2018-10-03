<template>
<div id="app">
  <Header/>
  <div style="padding:10px 0 0 0"></div>
    <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <router-view name='sidebar'/>
      </div>
      <div class="col-sm-9">
        <router-view default/>
      </div>
    </div>
    <Footer/>
  </div>
</div>
</template>

<script>
import Header from './components/common/Header'
import Footer from './components/common/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>
