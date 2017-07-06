<template>
  <table-wrapper title="Blog">
    <tr slot="header">
      <th class="article-title">Title</th>
      <th class="article-author">Author</th>
      <th class="article-text">Text</th>
      <th class="article-status">Status</th>
    </tr>
    <tr slot="body" v-for="article in articleList">
      <td class="article-title">{{article.title}}</td>
      <td class="article-author">{{article.author}}</td>
      <td class="article-text">{{article.text}}</td>
      <td><span :class="'label label-' + article.status.toLowerCase()">{{article.status}}</span></td>
    </tr>
  </table-wrapper>
</template>

<script>
import TableWrapper from '@/components/TableWrapper'
import { mapGetters } from 'vuex'

export default {
  name: 'Articles',
  data: function () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('getArticles')
  },
  computed: mapGetters({
    articleList: 'getArticleList'
  }),
  components: {
    TableWrapper
  }
}
</script>

<style>
</style>
