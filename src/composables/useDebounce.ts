import { ref, watch } from 'vue';
import type { Ref } from 'vue';

/**
 * 防抖 Composable
 * @param value 要防抖的響應式值
 * @param delay 延遲時間（毫秒）
 * @returns 防抖後的響應式值
 */
export function useDebounce<T>(value: Ref<T>, delay = 300): Ref<T> {
    // 防抖後的值
    const debouncedValue = ref<T>(value.value) as Ref<T>;

    let timeoutId: ReturnType<typeof setTimeout>;

    // 監聽原始值的變化
    watch(value, (newValue) => {
        // 清除之前的計時器
        clearTimeout(timeoutId);

        // 設定新的計時器
        timeoutId = setTimeout(() => {
            debouncedValue.value = newValue;
        }, delay);
    });

    return debouncedValue;
}

/**
 * 防抖函數 Composable
 * @param fn 要防抖的函數
 * @param delay 延遲時間（毫秒）
 * @returns 防抖後的函數
 */
export function useDebounceFn<T extends (...args: any[]) => any>(
    fn: T,
    delay = 300
): T {
    let timeoutId: ReturnType<typeof setTimeout>;

    return ((...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    }) as T;
}
