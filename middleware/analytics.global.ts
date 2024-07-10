export default defineNuxtRouteMiddleware((to, from) => {
  console.log('analytics global middleware', to, from)
})