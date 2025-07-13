import { ref, computed } from 'vue';
import type { Ref } from 'vue';

// 定義 useCounter 的選項介面
export interface UseCounterOptions {
    min?: number    // 最小值
    max?: number    // 最大值
    step?: number   // 步進值
}

// 定義 useCounter 的返回類型
export interface UseCounterReturn {
    count: Ref<number>
    doubleCount: Ref<number>
    increment: () => void
    decrement: () => void
    set: (value: number) => void
    reset: () => void
    canIncrement: Ref<boolean>
    canDecrement: Ref<boolean>
}

/**
 * 計數器 Composable
 * @param initialValue 初始值，預設為 0
 * @param options 選項配置
 * @returns 計數器相關的響應式數據和方法
 */
export function useCounter(
    initialValue = 0,
    options: UseCounterOptions = {}
): UseCounterReturn {
    const { min = -Infinity, max = Infinity, step = 1 } = options;

    // 響應式數據：計數器的值
    const count = ref(initialValue);

    // 計算屬性：計數器的兩倍值
    const doubleCount = computed(() => count.value * 2);

    // 計算屬性：是否可以增加
    const canIncrement = computed(() => count.value + step <= max);

    // 計算屬性：是否可以減少
    const canDecrement = computed(() => count.value - step >= min);

    // 增加計數器的函數
    const increment = (): void => {
        if (canIncrement.value) {
            count.value += step;
        }
    };

    // 減少計數器的函數
    const decrement = (): void => {
        if (canDecrement.value) {
            count.value -= step;
        }
    };

    // 設定計數器值的函數
    const set = (value: number): void => {
        if (value >= min && value <= max) {
            count.value = value;
        }
    };

    // 重設計數器到初始值的函數
    const reset = (): void => {
        count.value = initialValue;
    };

    return {
        count,
        doubleCount,
        increment,
        decrement,
        set,
        reset,
        canIncrement,
        canDecrement
    };
}
