<template>
  <ul class="sidebar-menu">
    <li class="header">TOOLS</li>
    <single-menu-item v-for="item in getMenuItems" :icon="item.icon" :description="item.description" :to="item.link" :key="item.order" on-click="toggleMenu"></single-menu-item>

    <li class="header">ME</li>
    <li class="pageLink" v-on:click="toggleMenu"><router-link to="/tasks"><i class="fa fa-tasks"></i><span class="page">Tasks</span></router-link></li>
    <li class="pageLink" v-on:click="toggleMenu"><router-link to="/setting"><i class="fa fa-cog"></i><span class="page">Settings</span></router-link></li>

    <li class="header">PAGES</li>
    <li class="pageLink" v-on:click="toggleMenu"><router-link to="/login"><i class="fa fa-circle-o text-yellow"></i> <span class="page">Login</span></router-link></li>
    <li class="pageLink" v-on:click="toggleMenu"><router-link to="/404"><i class="fa fa-circle-o text-red"></i> <span class="page">404</span></router-link></li>
  </ul>
</template>

<script>
import SingleMenuItem from '@/components/SingleMenuItem'
import { mapGetters } from 'vuex'

export default {
  name: 'SidebarMenu',
  data () {
    return {
    }
  },
  methods: {
    toggleMenu (event) {
      // remove active from li
      window.$('li.pageLink').removeClass('active')

      // Add it to the item that was clicked
      event.toElement.parentElement.className = 'pageLink active'
    }
  },
  components: {
    SingleMenuItem
  },
  computed: mapGetters(['getMenuItems'])
}
</script>
