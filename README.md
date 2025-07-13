# 測試用Vue3套件

### 安裝

```bash
yarn add chiyum-composable
```


### 使用

```Vue
<template>
    <div>
        <p>目前數字：{{ count }}</p>
<p>兩倍數字：{{ doubleCount }}</p>

<button @click="decrement" :disabled="!canDecrement">減少</button>
    <button @click="increment" :disabled="!canIncrement">增加</button>
    <button @click="reset">重設</button>
    <button @click="set(5)">設為 5</button>
</div>
</template>

<script setup lang="ts">
// 導入剛剛寫的 useCounter 函數
import { useCounter } from '@/composables/useCounter'   // 路徑依你的專案結構而定

// 使用 useCounter，傳入初始值與設定範圍
const {
    count,          // 目前數字
    doubleCount,    // 兩倍數字
    increment,      // 增加
    decrement,      // 減少
    reset,          // 重設
    set,            // 設定特定值
    canIncrement,   // 是否能加
    canDecrement    // 是否能減
} = useCounter(0, {
    min: 0,
    max: 10,
    step: 1
})
</script>
```
