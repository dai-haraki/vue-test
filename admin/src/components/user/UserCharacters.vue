<template>
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
</template>

<script>
export default {
  props: { id: Number },
  created: function() {
    console.log(this.id);
  },
  computed: {
    list() {
      console.log(this.$store.getters['userCharacters/getUsers']);
      return this.$store.getters['userCharacters/getUsers'];
    }
  }
}
</script>