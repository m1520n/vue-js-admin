<template>
  <div class="container container-table">
    <div class="row vertical-10p">
      <div class="container">
        <img src="/static/img/logo.png" class="center-block logo">
        <div class="text-center col-md-4 col-sm-offset-4">
          <!-- errors -->
          <div v-if=getError class="text-red"><p>{{getError}}</p></div>

          <!-- login form -->
          <form class="ui form loginForm"  @submit.prevent="checkCredentials">

            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
              <input class="form-control" name="username" placeholder="Username" type="text" v-model="username">
            </div>

            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-lock"></i></span>
              <input class="form-control" name="password" placeholder="Password" type="password" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary btn-lg "><i v-show="isPending" class="fa fa-spinner fa-spin"></i> Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  data: function (router) {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters({
      getError: 'getError',
      isPending: 'isPending'
    })
  },
  methods: {
    checkCredentials () {
      this.$store.dispatch('login', {
        context: this,
        creds: {
          username: this.username,
          password: this.password
        }
      })
    }
  }
}
</script>

<style>
html, body, .container-table {
  height: 100%;
  background-color: #282B30 !important;
}
.container-table {
  display: table;
  color: white;
}
.vertical-center-row {
  display: table-cell;
  vertical-align: middle;
}
.vertical-20p {
  padding-top: 20%;
}
.vertical-10p {
  padding-top: 10%;
}
.logo {
  width: 15em;
  padding: 3em;
}
.loginForm .input-group {
  padding-bottom: 1em;
  height: 4em;
}
.input-group input {
  height: 4em;
}
</style>
