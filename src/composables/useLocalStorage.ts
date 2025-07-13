import { ref, watch } from 'vue'
import type { Ref } from 'vue'

/**
 * LocalStorage Composable
 * @param key LocalStorage 的鍵名
 * @param defaultValue 預設值
 * @returns 響應式的 LocalStorage 值和設定函數
 */
export function useLocalStorage<T>(
    key: string,
    defaultValue: T
): [Ref<T>, (value: T) => void] {

    // 從 LocalStorage 讀取初始值
    const storedValue = localStorage.getItem(key)
    let initialValue: T

    try {
        // 嘗試解析儲存的 JSON 值
        initialValue = storedValue ? JSON.parse(storedValue) : defaultValue
    } catch {
        // 解析失敗時使用預設值
        initialValue = defaultValue
    }

    // 建立響應式 ref
    const value = ref(initialValue) as Ref<T>  // 👈 告訴 TS：這就是 Ref<T>

    // 設定值的函數
    const setValue = (newValue: T): void => {
        value.value = newValue
    }

    // 監聽值的變化，自動同步到 LocalStorage
    watch(
        value,
        (newValue) => {
            try {
                localStorage.setItem(key, JSON.stringify(newValue))
            } catch (error) {
                console.error(`Failed to save to localStorage:`, error)
            }
        },
        { deep: true } // 深度監聽物件變化
    )

    return [value, setValue]
}
