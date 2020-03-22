<template>
  <div class="home">
    <SearchBar :query="query"></SearchBar>
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

export default {
  name: 'Home',
  components: {
    SearchBar
  },
  data: () => ({
    query: 'default'
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
      console.log(`Q: ${this.query}`)
    }
  }
}
</script>
