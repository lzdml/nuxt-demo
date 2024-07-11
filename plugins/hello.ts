export default defineNuxtPlugin((nuxtApp) => {
  console.log('nuxtApp :>> ', nuxtApp);
  provide: {
    hello: (msg: string) => `你好： ${msg}}`
  }
})