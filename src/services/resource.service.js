// import config from '@/config'
// const API_URL = `${config.env.staging}/api/v1/`
// const ARTICLES_URL = API_URL + 'articles'

let ARTICLES = []
let PAGES = []

import faker from 'faker'

export default {

  prepareArticles () {
    for (let i = 0; i <= 50; i++) {
      ARTICLES.push({
        author: faker.name.findName(),
        title: faker.lorem.words(4),
        text: faker.lorem.paragraph(),
        status: faker.random.arrayElement(['Warning', 'Success', 'Primary', 'Danger'])
      })
    }
  },

  preparePages () {
    for (let i = 0; i <= 50; i++) {
      PAGES.push({
        author: faker.name.findName(),
        title: faker.lorem.words(4),
        text: faker.lorem.paragraph(),
        status: faker.random.arrayElement(['Warning', 'Success', 'Primary', 'Danger'])
      })
    }
  },

  getArticles () {
    return new Promise((resolve, reject) => {
      this.prepareArticles()
      return setTimeout(() => {
        resolve(ARTICLES)
      }, 1000)
    })
  },

  getPages () {
    return new Promise((resolve, reject) => {
      this.preparePages()
      return setTimeout(() => {
        resolve(PAGES)
      }, 1000)
    })
  }
}
