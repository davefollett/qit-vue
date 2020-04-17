<template>
  <div>
    <SearchBar :query="query"></SearchBar>
    <v-container>
      <div v-if="episodes">
        <p>{{ episodesFound }} results</p>
        <hr class="mb-4">
        <EpisodeCard
          class="mb-4"
          v-for="episode in episodes"
          :key="episode._id"
          :episode="episode"
        />
      </div>
      <div v-else>
        <v-container fluid>
          <v-row justify="center">
            <v-progress-circular
              indeterminate
              color="teal"
              size="80"
              width="8"
            ></v-progress-circular>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import EpisodeCard from '@/components/EpisodeCard.vue'

export default {
  name: 'Search',
  components: {
    SearchBar,
    EpisodeCard
  },
  data: () => ({
    query: 'default'
  }),
  beforeRouteUpdate (to, from, next) {
    this.query = to.params.query
    this.search()
    next()
  },
  mounted () {
    this.query = this.$route.params.query
    this.search()
  },
  computed: {
    episodes: function () {
      return this.$store.getters['SearchResults/episodes']
    },
    episodesFound: function () {
      return this.episodes.length
    }
  },
  methods: {
    search: function () {
      this.$store.dispatch('SearchResults/search', this.query)
    }
  }
}
</script>
