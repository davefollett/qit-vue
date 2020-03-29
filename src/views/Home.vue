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
          Get started searching the {{ totalIndexed }} podcasts indexed or checkout the lastest 10.
        </p>
      </v-row>

      <v-row justify="center">
        <SearchBar></SearchBar>
      </v-row>

      <SearchResultsCarousel
        title="10 Most Recent Podcasts"
        :results="lastTen"/>

    </v-container>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import SearchResultsCarousel from '@/components/SearchResultsCarousel.vue'

export default {
  name: 'Home',
  components: {
    SearchBar,
    SearchResultsCarousel
  },
  mounted () {
    this.$store.dispatch('SearchResults/totalIndexed')
    this.$store.dispatch('SearchResults/lastTen')
  },
  computed: {
    totalIndexed: function () {
      return this.$store.getters['SearchResults/totalIndexed']
    },
    lastTen: function () {
      return this.$store.getters['SearchResults/lastTen']
    }
  }
}
</script>
