// src/stores/counter.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
<<<<<<< HEAD
  // State：使用 ref 定義響應式狀態
  const count = ref(0)
  const history = ref([])

  // Getters：使用 computed 定義計算屬性
  const doubleCount = computed(() => count.value * 2)
  const isEven = computed(() => count.value % 2 === 0)
  const historyCount = computed(() => history.value.length)

  // Actions：定義修改狀態的方法
  function increment() {
    count.value++
    addToHistory('increment')
  }

  function decrement() {
    count.value--
    addToHistory('decrement')
  }

  function incrementBy(amount) {
    count.value += amount
    addToHistory(`increment by ${amount}`)
  }

  function reset() {
    count.value = 0
    history.value.push({
      action: 'reset',
      timestamp: new Date().toISOString(),
      previousValue: count.value
    })
  }

  // 私有方法
  function addToHistory(action) {
    history.value.push({
      action,
      timestamp: new Date().toISOString(),
      value: count.value
    })
  }

  // 返回所有要暴露的狀態和方法
  return {
    // State
    count,
    history,

    // Getters
    doubleCount,
    isEven,
    historyCount,

    // Actions
    increment,
    decrement,
    incrementBy,
    reset
  }
=======
    // State：使用 ref 定義響應式狀態
    const count = ref(0)
    const history = ref([])

    // Getters：使用 computed 定義計算屬性
    const doubleCount = computed(() => count.value * 2)
    const isEven = computed(() => count.value % 2 === 0)
    const historyCount = computed(() => history.value.length)

    // Actions：定義修改狀態的方法
    function increment() {
        count.value++
            addToHistory('increment')
    }

    function decrement() {
        count.value--
            addToHistory('decrement')
    }

    function incrementBy(amount) {
        count.value += amount
        addToHistory(`increment by ${amount}`)
    }

    function reset() {
        count.value = 0
        history.value.push({
            action: 'reset',
            timestamp: new Date().toISOString(),
            previousValue: count.value
        })
    }

    // 私有方法
    function addToHistory(action) {
        history.value.push({
            action,
            timestamp: new Date().toISOString(),
            value: count.value
        })
    }

    // 返回所有要暴露的狀態和方法
    return {
        // State
        count,
        history,

        // Getters
        doubleCount,
        isEven,
        historyCount,

        // Actions
        increment,
        decrement,
        incrementBy,
        reset
    }
>>>>>>> 3a350fe089462ad99160dbc29e89dbbaa2085d77
})