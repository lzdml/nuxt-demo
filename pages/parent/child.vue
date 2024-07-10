<template>
  <div style="border: 1px solid red;">
   
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  key: route => route.fullPath
})

const route = useRoute()
console.log('route :>> ', route);
const runtimeConfig = useRuntimeConfig()
console.log('runtimeConfig :>> ', runtimeConfig);


definePageMeta({title: 'child页面'})
</script>

<style scoped>

</style>