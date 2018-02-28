<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allComplete"/>
    </label>
    <span>
          <span>已完成{{completeCount}}</span> / 全部{{totalCount}}
        </span>
    <button class="btn btn-danger" v-show="completeCount>0" @click="deleteCompleted">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {

    computed: {
      ...mapGetters(['totalCount', 'completeCount', 'isAllCompleted']),

      allComplete: {
        get () {
          return this.$store.getters.isAllCompleted
        },
        set (value) {// value是boolean类型
          // 对所有todos进行全选或者全不选
          // this.selectAll(value)
          this.$store.dispatch('selectAll', value)
        }
      }
    },

    methods: {
      ...mapActions(['deleteCompleted'])
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>