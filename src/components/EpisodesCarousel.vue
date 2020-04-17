<template>
  <v-card
    raised
  >
    <v-card-title class="teal white--text">{{ title }}</v-card-title>
    <hr>
    <v-carousel
      height="200"
      show-arrows-on-hover
      cycle
      :dark="$vuetify.theme.dark"
      :light="!$vuetify.theme.dark"
    >
      <v-carousel-item
        v-for="episode in episodes"
        :key="episode._id"
      >
        <EpisodeDetails :episode="episode" :show-audio-controls="false"/>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
import EpisodeDetails from '@/components/EpisodeDetails.vue'

export default {
  name: 'EpisodesCarousel',
  components: {
    EpisodeDetails
  },
  props: {
    episodes: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
