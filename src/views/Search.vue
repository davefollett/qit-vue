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
      <v-progress-circular
        indeterminate
        color="teal"
        size="80"
        width="8"
      ></v-progress-circular>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import SearchResultCard from '@/components/SearchResultCard.vue'

const axios = require('axios')

export default {
  name: 'Search',
  components: {
    SearchBar,
    SearchResultCard
  },
  data: () => ({
    query: 'default',
    searchResults: null
  }),
  beforeRouteUpdate (to, from, next) {
    this.query = to.params.query
    this.search()
    next()
  },
  created () {
    this.query = this.$route.params.query
    this.search()
  },
  computed: {
    numberResults: function () {
      return this.searchResults.length
    }
  },
  methods: {
    search: function () {
      this.searchResults = null
      const token = Buffer.from(`${process.env.VUE_APP_ELASTIC_USERNAME}:${process.env.VUE_APP_ELASTIC_PASSWORD}`, 'utf8').toString('base64')
      const URL = `${process.env.VUE_APP_CORS_WRAPPER}/${process.env.VUE_APP_BASE_ELASTIC_URL}`
        .replace('{searchTerm}', this.query)
        .replace('{maxResults}', process.env.VUE_APP_MAX_RESULTS)
      axios
        .get(URL, {
          headers: {
            Authorization: `Basic ${token}`
          }
        })
        .then(response => {
          this.searchResults = response.data.hits.hits
        })
    }
  }
}
</script>
