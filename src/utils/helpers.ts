import { unref } from 'vue'
import type { MaybeRef } from '../types'

/**
 * 安全地取得 ref 或普通值
 * @param val 可能是 ref 或普通值
 * @returns 解除 ref 後的值
 */
export function toValue<T>(val: MaybeRef<T>): T {
    return unref(val)
}

/**
 * 檢查是否為瀏覽器環境
 */
export const isClient = typeof window !== 'undefined'

/**
 * 檢查是否支援 LocalStorage
 */
export const isLocalStorageSupported = (): boolean => {
    if (!isClient) return false

    try {
        const testKey = '__localStorage_test__'
        localStorage.setItem(testKey, 'test')
        localStorage.removeItem(testKey)
        return true
    } catch {
        return false
    }
}

/**
 * 安全的 JSON 解析
 * @param str 要解析的字串
 * @param fallback 解析失敗時的備用值
 */
export function safeJsonParse<T>(str: string, fallback: T): T {
    try {
        return JSON.parse(str)
    } catch {
        return fallback
    }
}
