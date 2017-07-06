<template>
  <table-wrapper title="Blog">
    <tr slot="header">
      <th>Product Name</th>
      <th>Category</th>
      <th>Description</th>
      <th>Actions</th>
    </tr>
    <tr slot="body" v-for="(product, index) in productList">
      <td>{{product.name}}</td>
      <td>{{product.category}}</td>
      <td>{{product.description}}</td>
      <td><actions :index="index"></actions></td>
    </tr>
  </table-wrapper>
</template>

<script>
import TableWrapper from '@/components/TableWrapper'
import Actions from '@/components/Actions'

import { mapGetters } from 'vuex'

export default {
  name: 'Products',
  data: function () {
    return {
    }
  },
  computed: mapGetters({
    productList: 'getProductList'
  }),
  components: {
    Actions,
    TableWrapper
  }
}
</script>

<style>
</style>
