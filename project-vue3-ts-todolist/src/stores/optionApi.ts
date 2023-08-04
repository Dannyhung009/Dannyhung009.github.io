import { ref, computed } from 'vue'
import { defineStore } from 'pinia'



export const useOptionApiStore = defineStore('optionApi', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})