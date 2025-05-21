<!-- src/components/Counter.vue -->
<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

// 取得 store 實例
const counterStore = useCounterStore()

// 解構響應式狀態和 getters（需要使用 storeToRefs）
const { count, history, doubleCount, isEven, historyCount } = storeToRefs(counterStore)

// 解構 actions（不需要 storeToRefs）
const { increment, decrement, incrementBy, reset } = counterStore
</script>

<template>
  <div class="counter">
    <h2>計數器</h2>

    <!-- 顯示當前狀態 -->
    <div class="counter-display">
      <p class="count">當前數值: {{ count }}</p>
      <p class="double">雙倍數值: {{ doubleCount }}</p>
      <p class="even-odd">
        數值是 {{ isEven ? '偶數' : '奇數' }}
      </p>
    </div>

    <!-- 控制按鈕 -->
    <div class="counter-controls">
      <button @click="decrement" class="btn btn-danger">-1</button>
      <button @click="increment" class="btn btn-primary">+1</button>
      <button @click="incrementBy(5)" class="btn btn-success">+5</button>
      <button @click="incrementBy(10)" class="btn btn-info">+10</button>
      <button @click="reset" class="btn btn-warning">重置</button>
    </div>

    <!-- 歷史記錄 -->
    <div class="counter-history">
      <h3>操作歷史 ({{ historyCount }} 筆)</h3>
      <div class="history-list">
        <div
          v-for="(item, index) in history.slice(-5)"
          :key="index"
          class="history-item"
        >
          <span class="action">{{ item.action }}</span>
          <span class="value">值: {{ item.value }}</span>
          <span class="time">{{ new Date(item.timestamp).toLocaleTimeString() }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.counter {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.counter-display {
  text-align: center;
  margin-bottom: 2rem;
}

.count {
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
}

.counter-controls {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-weight: bold;
}

.btn-primary { background: #3498db; }
.btn-danger { background: #e74c3c; }
.btn-success { background: #27ae60; }
.btn-info { background: #17a2b8; }
.btn-warning { background: #f39c12; }

.counter-history {
  margin-top: 2rem;
}

.history-list {
  max-height: 200px;
  overflow-y: auto;
}

.history-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
  font-size: 0.9rem;
}

.action { font-weight: bold; }
.value { color: #3498db; }
.time { color: #7f8c8d; font-size: 0.8rem; }
</style>