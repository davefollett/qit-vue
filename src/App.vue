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
        <v-icon large>mdi-home</v-icon>
      </v-btn>

      <!-- <v-badge
        content="0"
        :value="1"
        color="green"
        overlap
      >
        <v-icon large>mdi-playlist-music</v-icon>
      </v-badge> -->

      <v-btn icon to="/about">
        <v-icon large>mdi-information</v-icon>
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
