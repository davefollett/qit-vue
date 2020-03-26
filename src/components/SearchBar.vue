<template>
  <v-container>
    <v-text-field
      label="Podcast Search"
      v-model="queryModel"
      color="teal"
      @keyup.enter="submit"
    >
      <template v-slot:append>
        <v-btn class="ma-0 white--text" large color="teal" @click="submit">SEARCH</v-btn>
      </template>
    </v-text-field>
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
      this.$router.push({ path: `/search/${this.queryModel}` }).catch(noopErr => {})
    }
  },
  watch: {
    query: function (newVal, oldVal) {
      this.queryModel = newVal
    }
  }
}
</script>
