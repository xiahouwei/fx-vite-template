/// <reference types="vite/client" />

declare module '*.vue' {
  import type { defineComponent, App } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: ReturnType<typeof defineComponent> & { install(app: App): void }
  export default component
}