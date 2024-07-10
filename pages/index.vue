<template>
  <div>
    <AppAlert>
      这是一个自动导入的组件
      <template #footer>
        <div>
          <button>确定</button>
          <button>取消</button>
        </div>
      </template>
     </AppAlert>
  </div>
</template>

<script setup lang="ts">
// const runtimeConfig = useRuntimeConfig()
// console.log('runtimeConfig :>> ', runtimeConfig);
</script>

<style scoped></style>