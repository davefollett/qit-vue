<template>
  <div>
    <SearchBar :query="query"></SearchBar>

    <p>HITS: {{ searchResults.hits.hits.length }}</p>

    <hr>
    <p>QUERY: {{ query }}</p>
    <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
    <router-link to="/search/foo">Go to Foo</router-link>
    <br>
    <router-link to="/search/bar">Go to Bar</router-link>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'

const axios = require('axios')

export default {
  name: 'Search',
  components: {
    SearchBar
  },
  data: () => ({
    query: 'default',
    searchResults: {}
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
  methods: {
    search: function () {
      // console.log(`Q: ${this.query}`)
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
          this.searchResults = response.data
        })
    }
  }
}
</script>
