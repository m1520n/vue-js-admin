<template>
  <section class="content">
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1">
        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title">{{title}}</h3>
            <div class="box-tools">
              <div class="input-group input-group-sm" style="width: 150px;">
                <input type="text" name="table_search" class="form-control pull-right" placeholder="Search" v-model="searchQuery" @keyup="updateResults">
                <div class="input-group-btn">
                  <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                </div>
              </div>
            </div>
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover">
                <thead>
                  <slot name="header"></slot>
                </thead>
                <tbody>
                  <slot name="body"></slot>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Table',
  props: ['title'],
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    updateResults () {
      this.$store.commit('UPDATE_SEARCH_QUERY', this.searchQuery)
    }
  }
}
</script>
