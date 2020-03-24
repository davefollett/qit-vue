<template>
  <v-app>
    <v-app-bar
      app
      color="teal"
      dark
    >
      <v-toolbar-title>QIT-VUE</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon to="/about">
        <v-icon>mdi-information</v-icon>
      </v-btn>

    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
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
