import {ADD_TODO, DELETE_TODO, SELECT_ALL, DELETE_COMPLETED, RECEIVE_TODOS} from './mutation-types'
import storageUtil from '../utils/stotageUtil'

export default {
  // 添加todo
  addTodo ({commit}, todo) {
    // 提交mutation
    commit(ADD_TODO, todo)
  },
  // 删除todo
  deleteTodo ({commit}, index) {
    // 提交mutation
    commit(DELETE_TODO, index)
  },
  // 全选或全不选
  selectAll ({commit}, check) {
    commit(SELECT_ALL, check)
  },
  // 删除全部选中的
  deleteCompleted({commit}) {
    commit(DELETE_COMPLETED)
  },

  // 异步获取todos并更新状态
  reqTodos ({commit}) {
    //模拟
    setTimeout(() => {
      // 读取数据
      const todos = storageUtil.readTodos()
      // 提交mutation
      commit(RECEIVE_TODOS, todos)
    }, 1000)
  }
}