<template>
  <div class="home">
    <v-container>
      <v-row justify="center">
        <p class="title">
          Welcome to QIT, the website that searches for software developer podcasts by topic.
        </p>
      </v-row>

      <v-row justify="center">
        <p>
          Get started searching the {{ totalIndexed }} podcasts indexed or checkout the lastest {{numberOfMostRecent}}.
        </p>
      </v-row>

      <v-row justify="center">
        <SearchBar></SearchBar>
      </v-row>

      <EpisodesCarousel
        v-if="mostRecent"
        :title="mostRecentCarouselTitle"
        :episodes="mostRecent"
      />

    </v-container>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import EpisodesCarousel from '@/components/EpisodesCarousel.vue'

export default {
  name: 'Home',
  components: {
    SearchBar,
    EpisodesCarousel
  },
  data: () => ({
    numberOfMostRecent: 5
  }),
  mounted () {
    this.$store.dispatch('SearchResults/totalIndexed')
    this.$store.dispatch('SearchResults/mostRecent', this.numberOfMostRecent)
  },
  computed: {
    totalIndexed: function () {
      return this.$store.getters['SearchResults/totalIndexed']
    },
    mostRecent: function () {
      return this.$store.getters['SearchResults/mostRecent']
    },
    mostRecentCarouselTitle: function () {
      return `${this.numberOfMostRecent} Most Recent Podcasts`
    }
  }
}
</script>
