<template>
  <div>
    <form class="form-inline">
      <div class="form-group sm-4">
        <label for="keyword" class="sr-only">keyword</label>
        <input type="text" class="form-control" id="keyword"  placeholder="user_id or name.." v-model="keyword">&nbsp;
      </div>
      <button type="button" class="btn btn-info sm-2" v-on:click="search">検索</button>
    </form>
    <div v-if="list.length >= 1">
      <div class="table-responsive">&nbsp;
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="{ id, name } in list" :key="id" style="cursor:pointer">
              <td><router-link :to="`/users/${ id }`">{{ id }}</router-link></td>
              <td>{{ name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
  },
}
</script>
