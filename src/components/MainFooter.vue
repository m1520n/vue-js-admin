<template>
  <footer class="main-footer">
    <strong>Copyright &copy; {{year}} <a href="javascript:;">Altsoft</a>.</strong> All rights reserved.
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  computed: {
    year () {
      var y = new Date()
      return y.getFullYear()
    }
  }
}
</script>
