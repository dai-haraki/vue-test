<template>
  <div>
    <table v-if="user">
      <thead>
        <tr>
          <th>ID</th>
          <th>名前</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  props: { id: Number },
  data() {
    return {
      user: null
    }
  },
  created: function() {
    console.log(this.id);
    // 直接URLにID指定で来る可能性があるため検索する必要がある(usersにデータが無い可能性がある)
    this.$store.dispatch('users/getById', this.id);
    this.user = this.$store.getters['users/getUser'];
  },
}
</script>
