<template>
  <div id="app">
    <Header/>
    <router-view name='sidebar'/>
    <router-view default/>
    <Footer/>
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
