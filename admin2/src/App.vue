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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

@Component({
  components: {
    Header,
    Footer
  },
})
export default class Home extends Vue {}
</script>
