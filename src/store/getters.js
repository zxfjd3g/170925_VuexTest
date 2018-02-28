export default {

  // 总数量
  totalCount (state) {
    return state.todos.length
  },
  // 完成数量
  completeCount (state) {
    return state.todos.reduce((preToal, todo) => preToal+(todo.completed?1:0),0)
  },
  // 判断是否全选
  isAllCompleted (state, getters) {
    return getters.completeCount===getters.totalCount && getters.totalCount>0
  }

}