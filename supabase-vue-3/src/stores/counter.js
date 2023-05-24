import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  let page = 'homepage'
  let loggedIn = false
  let username = ''
  let password = ''
  return { page, username, password }
})
