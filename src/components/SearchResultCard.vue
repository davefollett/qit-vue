<template>
  <v-card
    class="mx-auto"
    raised
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{date}}</div>
        <v-list-item-title class="headline mb-1">{{ episodeTitle }}</v-list-item-title>
        <v-list-item-subtitle>{{podcastTitle}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
      >
        <v-icon x-large color="teal">mdi-playlist-plus</v-icon>
      </v-list-item-avatar>
    </v-list-item>
     <audio :src="audioUrl" controls preload="none"></audio>
  </v-card>
</template>

<script>
// import { format } from 'date-fns'

export default {
  name: 'SearchResultCard',
  props: {
    result: {
      type: Object,
      required: true
    }
  },
  computed: {
    audioUrl: function () {
      return this.result._source.audio_url
    },
    date: function () {
      return this.result._source.published
    },
    podcastTitle: function () {
      return this.result._source.podcast_title
    },
    episodeTitle: function () {
      return this.result._source.episode_title
    }
  }
}
</script>
