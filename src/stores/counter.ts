import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    function increment() {
        count.value++
    }
    const reduce = () => {
        count.value--
    }
    return { count, increment, reduce }
}, {
    persist: {
        enabled: true,
        strategies: [{
            // 可以指定任何 extends Storage 的实例，默认是 sessionStorage
            storage: sessionStorage,
            // state 中的字段名，按组打包储存
            paths: ["count"]
        }],
    }
})