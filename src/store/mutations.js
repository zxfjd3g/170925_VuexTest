import {ADD_TODO, DELETE_TODO, SELECT_ALL, DELETE_COMPLETED, RECEIVE_TODOS} from './mutation-types'

export default {
  [ADD_TODO] (state, todo) {
    state.todos.unshift(todo)
  },

  [DELETE_TODO] (state, index) {
    state.todos.splice(index, 1)
  },

  [SELECT_ALL] (state, check) {
    state.todos.forEach(todo => todo.completed = check)
  },

  [DELETE_COMPLETED] (state) {
    state.todos = state.todos.filter(todo => !todo.completed)
  },

  [RECEIVE_TODOS] (state, todos) {
    state.todos = todos
  }
}