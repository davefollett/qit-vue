<template>
  <div>
    <v-list-item three-line>

      <v-list-item-content>
        <div class="overline mb-4">{{date}}</div>
        <v-list-item-title class="subtitle-2 mb-1 text-wrap">{{ episodeTitle }}</v-list-item-title>
        <v-list-item-subtitle>{{ podcastTitle }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
      >
        <v-btn
          v-if="!isQueued"
          icon
          @click="addToQueue"
          aria-label="Add To Queue"
        >
          <v-icon x-large color="teal">mdi-playlist-plus</v-icon>
        </v-btn>

        <v-btn
          v-else
          icon
          @click="removeFromQueue"
          aria-label="Remove From Queue"
        >
          <v-icon x-large color="teal">mdi-playlist-minus</v-icon>
        </v-btn>

      </v-list-item-avatar>

    </v-list-item>

     <audio
      v-if="showAudioControls"
      :src="audioUrl"
      controls
      preload="none">
    </audio>
  </div>
</template>

<script>

export default {
  name: 'EpisodeDetails',
  props: {
    episode: {
      type: Object,
      required: true
    },
    showAudioControls: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    audioUrl: function () {
      return this.episode._source.audio_url
    },
    date: function () {
      return this.episode._source.published
    },
    podcastTitle: function () {
      return this.episode._source.podcast_title
    },
    episodeTitle: function () {
      return this.episode._source.episode_title
    },
    isQueued: function () {
      return this.$store.getters['Queue/isQueued'](this.episode)
    }
  },
  methods: {
    addToQueue: function () {
      this.$store.dispatch('Queue/add', this.episode)
    },
    removeFromQueue: function () {
      this.$store.dispatch('Queue/remove', this.episode)
    }
  }
}
</script>
