export default defineNuxtRouteMiddleware((to,from) => {
  console.log('触发了说明 【plugins/index.ts】文件下 【named-test】路由没有覆盖')
  console.log('to, from :>> ', to, from);
})