<template>
  <v-card
    class="mx-auto"
    raised
  >
    <EpisodeDetails :episode="episode"/>
  </v-card>
</template>

<script>
import EpisodeDetails from '@/components/EpisodeDetails.vue'

export default {
  name: 'EpisodeCard',
  components: {
    EpisodeDetails
  },
  props: {
    episode: {
      type: Object,
      required: true
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
