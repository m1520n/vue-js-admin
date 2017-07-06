<template>
  <div class="button-row">
    <router-link to="/"><i class="fa fa-eye" aria-hidden="true"></i></router-link>
    <router-link :to="{ path: '/edit-product/' + index}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></router-link>
    <i class="fa fa-trash-o" aria-hidden="true" @click="onDelete"></i>
  </div>
</template>

<script>
export default {
  name: 'Articles',
  props: [
    'index'
  ],
  data: function () {
    return {
      onView: '/',
      onEdit: '/edit-product'
    }
  },
  methods: {
    onDelete () {
      this.$store.commit('REMOVE_PRODUCT', this.index)
    }
  }
}
</script>

<style lang="scss">
  .button-row {
    display: flex;
    font-size: 14px;
  }
</style>
