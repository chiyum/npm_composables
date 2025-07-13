import type { Ref, ComputedRef } from 'vue';

// 重新導出 Vue 的類型，方便使用者使用
export type { Ref, ComputedRef, UnwrapRef } from 'vue';

// 計數器相關類型
export interface UseCounterOptions {
    min?: number
    max?: number
    step?: number
}

export interface UseCounterReturn {
    count: Ref<number>
    doubleCount: ComputedRef<number>
    increment: () => void
    decrement: () => void
    set: (value: number) => void
    reset: () => void
    canIncrement: ComputedRef<boolean>
    canDecrement: ComputedRef<boolean>
}

// Fetch 相關類型
export interface UseFetchReturn<T> {
    data: Ref<T | null>
    error: Ref<string | null>
    loading: Ref<boolean>
    execute: () => Promise<void>
}

// 通用工具類型
export type MaybeRef<T> = T | Ref<T>
export type MaybeRefOrGetter<T> = T | Ref<T> | (() => T)
