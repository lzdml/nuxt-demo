<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
    <!-- 如果应用程序只有一个布局，则使用app.vue和NuxtPage组件 -->

    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">
const layout = ref('default')

</script>