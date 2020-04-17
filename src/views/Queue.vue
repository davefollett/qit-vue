<template>
  <div class="home">
    <v-container>
      <v-row justify="center">
        <p class="title">
          {{queueLegnth}} podcasts episodes are in your queue.
        </p>
      </v-row>

      <EpisodeCard
          class="mb-4"
          v-for="episode in episodes"
          :key="episode._id"
          :episode="episode"/>

    </v-container>
  </div>
</template>

<script>
import EpisodeCard from '@/components/EpisodeCard.vue'

export default {
  name: 'Queue',
  components: {
    EpisodeCard
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
