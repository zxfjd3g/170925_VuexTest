<template>
  <li :style="{background: bgColor}"
      @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.completed"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  export default {
    props: {
      todo: Object,
      index: Number,
    },
    data () {
      return {
        bgColor: 'white',
        isShow: false
      }
    },

    methods: {
      handleEnter(isEnter) {
        if(isEnter) { // 进入
          this.bgColor = '#dddddd'
          this.isShow = true
        } else {// 离开
          this.bgColor = 'white'
          this.isShow = false
        }
      },

      deleteItem () {
        const {todo, index} = this
        if(window.confirm(`确定删除${todo.title}吗?`)) {
          // deleteTodo(index)
          this.$store.dispatch('deleteTodo', index)
        }
      }
    }
  }
</script>

<style>

</style>