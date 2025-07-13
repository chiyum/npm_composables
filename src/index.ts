// 導出所有類型定義，方便使用者進行類型檢查
export * from '@/types';

// 導出所有 composables 函數
export { useCounter } from '@/composables/useCounter';
export { useLocalStorage } from '@/composables/useLocalStorage';
export { useDebounce } from '@/composables/useDebounce';
export { useFetch } from '@/composables/useFetch';

// 導出工具函數（如果有的話）
export * from '@/utils/helpers';

// 也可以提供一個統一的命名空間導出
import { useCounter } from '@/composables/useCounter';
import { useLocalStorage } from '@/composables/useLocalStorage';
import { useDebounce } from '@/composables/useDebounce';
import { useFetch } from '@/composables/useFetch';

// 統一導出物件，方便整包引入
export const composables = {
    useCounter,
    useLocalStorage,
    useDebounce,
    useFetch
};
