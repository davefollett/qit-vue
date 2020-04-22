<template>
  <v-app>
    <v-app-bar
      app
      color="teal"
      dark
    >
      <v-toolbar-title class="font-weight-bold">
        <v-icon large>mdi-magnify</v-icon>
        QIT
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/">
        <v-icon large>mdi-home</v-icon>
      </v-btn>

      <v-badge
        :content="queueLegnth"
        :value="queueLegnth"
        color="red"
        overlap
      >
        <v-btn icon to="/queue">
          <v-icon large>mdi-playlist-music</v-icon>
        </v-btn>
      </v-badge>

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
  computed: {
    queueLegnth: function () {
      return this.$store.getters['Queue/length']
    }
  }
}
</script>
