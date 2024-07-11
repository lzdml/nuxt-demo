<template>
  <section>
    <NuxtLayout name="custom">
      <NuxtLink to="/" replace>返回</NuxtLink>
      <h3>自定义 【NuxtLayout布局】</h3>
      <template #header>一些页眉模板内容</template>

      页面的其余部分
    </NuxtLayout>
  </section>
</template>

<script setup lang="ts">
const layout = ref('custom')
function enableCustomLayout() {
  console.log('触发', layout.value === 'custom' ? 'default' : 'custom')
  setPageLayout('default')
}
definePageMeta({
  layout: false,
  middleware: [
    function(to, from) {
      console.log('about middleware')
    },
    'named-test'
  ]
});
</script>

<style scoped></style>