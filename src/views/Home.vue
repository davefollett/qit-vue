<template>
  <div class="home">
    <v-row justify="center">
      <p class="title">
        Welcome to QIT, the website that searches for software develper podcasts by topic.
      </p>
    </v-row>

    <v-row justify="center">
      <p>
        Get started searching or checkout the lastest 10 podcasts.
      </p>
    </v-row>

    <v-row justify="center">
      <SearchBar></SearchBar>
    </v-row>

    <v-container>
      <v-row justify="center">
        <p>Total Podcasts Indexed: {{ totalIndexed }}</p>
      </v-row>

      <div v-if="lastTen">
        <hr class="mb-4">
        <p>Most Recent 10 Podcasts</p>
        <SearchResultCard
          class="mb-4"
          v-for="result in lastTen"
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

    </v-container>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import SearchResultCard from '@/components/SearchResultCard.vue'

export default {
  name: 'Home',
  components: {
    SearchBar,
    SearchResultCard
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
