<template>
  <v-app>
    <v-app-bar
      app
      color="teal"
      dark
    >
      <v-toolbar-title class="font-weight-bold">
        <v-icon large>mdi-magnify</v-icon>
        QIT-VUE
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon to="/" v-on="on" aria-label="Navigate To Home Page">
            <v-icon large>mdi-home</v-icon>
          </v-btn>
        </template>
        <span>Home Page</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-badge
            :content="queueLegnth"
            :value="queueLegnth"
            color="red"
            overlap
          >
            <v-btn icon to="/queue" v-on="on" aria-label="Navigate To Episode Queue Page">
              <v-icon large>mdi-playlist-music</v-icon>
            </v-btn>
          </v-badge>
        </template>
        <span>Episode Queue Page</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon to="/about" v-on="on" aria-label="Navigate To About Page">
            <v-icon large>mdi-information</v-icon>
          </v-btn>
        </template>
        <span>About Page</span>
      </v-tooltip>

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
