<template>
  <v-app>
    <div id="nav" class="mt-5">
      <router-link to="/">Home</router-link> |
      <router-link to="/curriculum">Create</router-link>
    </div>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style lang="scss" scoped>
  #nav {
    text-align: center;
  }
</style>
