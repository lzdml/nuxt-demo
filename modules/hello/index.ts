// nuxt/kit 是一个辅助子路径导入， 你可以子啊定义本地模块时使用
// 这意味着你不需要将 @nuxt/kit 添加到你的依赖中

import { createResolver, defineNuxtModule, addServerHandler } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'hello'
  },
  setup() {
    const { resolve } = createResolver(import.meta.url)

    // 添加一个API路由
    addServerHandler({
      route: '/api/hello',
      handler: resolve('./runtime/api-route')
    })
  }
})