<template>
  <v-row no-gutters class="home-page">
    <v-col
      md="6"
      offset-md="3"
      sm="8"
      offset-sm="2"
    >
      <div class="page-header">
        <h1>All Curricula</h1>
        <v-btn>Create New</v-btn>
      </div>

      <div class="curricula-list">
        <v-card
            outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-card-title class="headline">My Curriculum #1</v-card-title>
              <v-card-subtitle>This is a description..........</v-card-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
</style>
