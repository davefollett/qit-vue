<template>
  <v-container>

    <v-text-field
      label="Podcast Search"
      v-model="queryModel"
      outlined
    ></v-text-field>

    <v-btn large color="primary" @click="submit">SEARCH</v-btn>

  </v-container>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    queryModel: ''
  }),
  mounted () {
    this.queryModel = this.query
  },
  methods: {
    submit: function () {
      this.$router.push({ path: `/search/${this.queryModel}` })
    }
  },
  watch: {
    query: function (newVal, oldVal) {
      this.queryModel = newVal
    }
  }
}
</script>
