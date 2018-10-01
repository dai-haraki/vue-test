<template>
  <div>
    <div>
      <router-link :to="`/users/${id}`">ユーザー詳細</router-link>
    </div>
    <div>
      <router-link :to="`/users/${id}/user-characters`">キャラクター</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: { id: Number },
  created: function() {
    console.log("side: " + this.id);
  }
}
</script>
