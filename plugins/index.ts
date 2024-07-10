export default defineNuxtPlugin(() => {
  addRouteMiddleware('global-test', () => {
    console.log('这个全局中间件是在插件中添加的，将在每次路由更改时运行')
  }, { global: true })

  addRouteMiddleware('named-test', () => {
    console.log('这个命名中间件是在插件中添加的，将覆盖同名的任何现有中间件')
  })
})