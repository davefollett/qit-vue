<template>
  <v-card
    raised
  >
    <v-card-title>{{ title }}</v-card-title>
    <hr>
    <v-carousel
      height="200"
      show-arrows-on-hover
      cycle
      :dark="$vuetify.theme.dark"
      :light="!$vuetify.theme.dark"
    >
      <v-carousel-item
        v-for="result in results"
        :key="result._id"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">{{result._source.published}}</div>
            <v-list-item-title class="subtitle-2 mb-1 text-wrap">{{ result._source.episode_title }}</v-list-item-title>
            <v-list-item-subtitle>{{result._source.podcast_title}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
          >
            <v-icon x-large color="teal">mdi-playlist-plus</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <!-- <audio :src="audioUrl" controls preload="none"></audio> -->
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>

export default {
  name: 'SearchResultsCarousel',
  props: {
    results: {
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
