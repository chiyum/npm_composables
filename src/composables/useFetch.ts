import { ref } from 'vue'
import type { Ref } from 'vue'
// 定義 Fetch 的狀態介面
export interface UseFetchReturn<T> {
    data: Ref<T | null>
    error: Ref<string | null>
    loading: Ref<boolean>
    execute: () => Promise<void>
}

/**
 * Fetch Composable
 * @param url 請求的 URL
 * @returns Fetch 相關的響應式狀態和執行函數
 */
export function useFetch<T = any>(url: string): UseFetchReturn<T> {
    // 響應式狀態
    const data = ref<T | null>(null) as Ref<T | null>
    const error = ref<string | null>(null)
    const loading = ref(false)

    // 執行請求的函數
    const execute = async (): Promise<void> => {
        loading.value = true
        error.value = null

        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const result = await response.json()
            data.value = result
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'An error occurred'
        } finally {
            loading.value = false
        }
    }

    return {
        data,
        error,
        loading,
        execute
    }
}
