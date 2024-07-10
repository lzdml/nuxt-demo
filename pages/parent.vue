<template>
  <div>
    <h1>我是父视图</h1>
    <NuxtPage :foobar="123123" :page-key="route => route.fullPath" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: '我是父视图'
})

const route = useRoute()
console.log('route.meta :>> ', route.meta);
</script>

<style scoped>

</style>