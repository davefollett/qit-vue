<template>
  <div class="home">
    <v-container>
      <v-row justify="center">
        <p class="title">
          {{queueLegnth}} podcasts episodes are in your queue.
        </p>
      </v-row>

      <SearchResultCard
          class="mb-4"
          v-for="result in episodes"
          :key="result._id"
          :result="result"/>

    </v-container>
  </div>
</template>

<script>
import SearchResultCard from '@/components/SearchResultCard.vue'

export default {
  name: 'Queue',
  components: {
    SearchResultCard
  },
  data: () => ({
    numberOfMostRecent: 5
  }),
  computed: {
    queueLegnth: function () {
      return this.$store.getters['Queue/length']
    },
    episodes: function () {
      return this.$store.getters['Queue/queue']
    }
  }
}
</script>
