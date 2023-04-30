/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_API_ENDPOINT: string
    readonly VITE_API_KEY: string
    readonly VITE_APP_URL: string
    readonly VITE_WEB_SOCKET: string
    readonly VITE_RADIO_4096: string
    readonly VITE_RADIO_4122: string

    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<
        Record<string, unknown>,
        Record<string, unknown>,
        unknown
    >
    export default component
}
