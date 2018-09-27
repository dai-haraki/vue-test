<template>
  <div>
    <input type="text" v-model="keyword">
    <input type="button" v-on:click="search" value="検索">
    <ul>
      <li v-for="{ id, name } in list" :key="id">
        <router-link :to="`/users/${ id }`">{{ name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      keyword: ''
    }
  },
  computed: {
    list() {
      return this.$store.getters['users/getUsers'];
    }
  },
  methods: {
    search() {
      console.log(this.keyword);
      this.$store.dispatch('users/search', this.keyword);
    }
  }
}
</script>
