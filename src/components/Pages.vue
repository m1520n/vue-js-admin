<template>
  <table-wrapper title="Pages">
    <tr slot="header">
      <th class="article-title">Title</th>
      <th class="article-author">Author</th>
      <th class="article-text">Text</th>
      <th class="article-status">Status</th>
    </tr>
    <tr slot="body" v-for="page in pageList">
      <td class="article-title">{{page.title}}</td>
      <td class="article-author">{{page.author}}</td>
      <td class="article-text">{{page.text}}</td>
      <td><span :class="'label label-' + page.status.toLowerCase()">{{page.status}}</span></td>
    </tr>
  </table-wrapper>
</template>

<script>
import TableWrapper from '@/components/TableWrapper'
import { mapGetters } from 'vuex'

export default {
  name: 'Pages',
  data: function () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('getPages')
  },
  computed: mapGetters({
    pageList: 'getPageList'
  }),
  components: {
    TableWrapper
  }
}
</script>

<style>
</style>
