<template>
  <li class="pageLink"@click="onClick">
    <router-link :to="to">
      <i :class="icon"></i><span class="page">{{description}}</span>
    </router-link></li>
</template>

<script>
export default {
  name: 'SingleMenuItem',
  props: [
    'icon',
    'onClick',
    'to',
    'description'
  ],
  data () {
    return {
    }
  }
}
</script>
