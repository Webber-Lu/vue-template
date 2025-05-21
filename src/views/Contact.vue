<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

// 取得 store 實例
const counterStore = useCounterStore()
// 解構響應式狀態和 getters（需要使用 storeToRefs）
const { count, history, doubleCount, isEven, historyCount } = storeToRefs(counterStore)
</script>

<template>
Contact Page
<div>Counter value = {{ count }}</div>
</template>

