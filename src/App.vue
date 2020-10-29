<template>
  <v-app id="app">
    <TopNav />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TopNav from '@/components/TopNav'

export default {
  name: 'App',
  components: {
    TopNav
  }
}
</script>

<style lang="scss" scoped>
</style>
