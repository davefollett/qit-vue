import axios from 'axios'

const token = Buffer.from(`${process.env.VUE_APP_ELASTIC_USERNAME}:${process.env.VUE_APP_ELASTIC_PASSWORD}`, 'utf8').toString('base64')
const URL = `${process.env.VUE_APP_CORS_WRAPPER}/${process.env.VUE_APP_BASE_ELASTIC_URL}`

const instance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Basic ${token}`
  }
})

const searchAPI = {
  async search (query) {
    const SEARCH_URL = '/podcasts/_search?q={searchTerm}&size={maxResults}'
      .replace('{searchTerm}', query)
      .replace('{maxResults}', process.env.VUE_APP_MAX_RESULTS)

    return instance.get(SEARCH_URL)
  },
  async totalIndexed () {
    const response = await instance.get('/podcasts/_count')
    return response.data.count
  },
  async mostRecent (number) {
    return instance.get(`/podcasts/_search?size=${number}&sort=published:desc`)
  }
}

export default searchAPI
