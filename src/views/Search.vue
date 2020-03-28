<template>
  <div>
    <SearchBar :query="query"></SearchBar>
    <div v-if="searchResults">
      <p>{{ searchResults.length }} results</p>
      <hr class="mb-4">
      <SearchResultCard
        class="mb-4"
        v-for="result in searchResults"
        :key="result._id"
        :result="result"/>
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
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import SearchResultCard from '@/components/SearchResultCard.vue'

export default {
  name: 'Search',
  components: {
    SearchBar,
    SearchResultCard
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
    searchResults: function () {
      return this.$store.getters['SearchResults/searchResults']
    },
    numberResults: function () {
      return this.searchResults.length
    }
  },
  methods: {
    search: function () {
      this.$store.dispatch('SearchResults/search', this.query)
    }
  }
}
</script>
