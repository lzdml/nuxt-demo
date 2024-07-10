<template>
  <div>

  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: [
    function(to, from) {
      console.log('middleware 页面级 自定义内联中间件')
    },
    'auth'
  ]
})
</script>

<style scoped>

</style>