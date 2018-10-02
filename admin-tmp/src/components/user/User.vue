<template>
<div class="table-responsive" v-if="user">&nbsp;
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
      </tr>
    </thead>
    <tbody>
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
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
  beforeDestroy() {
    // 親ルートを移動するときにデータを破棄する TODO: サイドバーの移動で毎回破棄/検索を行ってしまう
    console.log("haki.")
    // this.$store.dispatch('users/destroy', this.id);
  }
}
</script>
