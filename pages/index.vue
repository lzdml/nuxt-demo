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

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>

    <ClientOnly fallback-tag="span" fallback="Loading comments....">
      <div style="position: fixed; bottom: 20px;">
        <NuxtLink to="/about">去about</NuxtLink>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">

// const runtimeConfig = useRuntimeConfig()
// console.log('runtimeConfig :>> ', runtimeConfig);
definePageMeta({ keepalive: true })

const nuxtApp = useNuxtApp()
console.log('nuxtApp :>> ', nuxtApp);

const { data } = await useFetch('/api/v1/hello')
console.log('data :>> ', data);
</script>

<style scoped>
li {
  height: 100px;
  border: 1px solid red;
  margin-bottom: 14px;
}
</style>