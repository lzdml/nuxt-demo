<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
    <!-- 如果应用程序只有一个布局，则使用app.vue和NuxtPage组件 -->

    <Transition name="nested">
      <div>
        <NuxtLayout :name="layout">
        <NuxtPage />
      </NuxtLayout>
      </div>
    </Transition>
  </div>
</template>


<script setup lang="ts">
const layout = ref('default')

</script>

<style scoped>
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

</style>