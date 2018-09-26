<template>
  <div>
    <input type="text">
    <input type="button" v-on:click="search" value="検索">
    <ul>
      <li v-for="{ id, name } in list" :key="id">
        <router-link :to="`/users/${ id }`">{{ name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import users from '@/api/user/users.js'
export default {
  computed: {
    list: () => users.fetch()
  },
  methods: {
    search: () => {
      console.log("xx");
      // return users.find(1);
      // console.log(this.list);
    }
  }
}
</script>
