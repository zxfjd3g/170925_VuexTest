# 1. vuex是什么
	vue的一个插件库
	作用: 集中式管理vue应用中多组件共享的状态数据
	
# 2. vuex的结构 
![vuex结构](https://vuex.vuejs.org/zh-cn/images/vuex.png)

# 3. vuex的核心概念
## 1). state
	vuex管理的状态对象
	它应该是唯一的
	const state = {
		xxx: initValue
	}
## 2). mutations
	包含多个直接更新state的方法(回调函数)的对象
	谁来触发: action中的commit('mutation名称')
	只能包含同步的代码, 不能写异步代码
	const mutations = {
		yyy (state, {data1}) { 
			// 更新state的某个属性
		}
	}
## 3). actions
	包含多个事件回调函数的对象
	通过执行: commit()来触发mutation的调用, 间接更新state
	谁来触发: 组件中: $store.dispatch('action名称', data1)
	可以包含异步代码(定时器, ajax)
	const actions = {
		zzz ({commit, state}, data1) {
			commit('yyy', {data1})
		}
	}
## 4). getters
	包含多个计算属性(get)的对象
	谁来读取: 组件中: $store.getters.xxx
	const getters = {
		mmm (state) {
			return ...
		}
	}

# 4. 相关API
## 1). Vuex对象
    1. Store: 构造函数, 它的实例为最核心的管理对象
    2. mapState(): 用来简化从state中获取数据的函数
    3. mapGetters(): 用来简化从getters中获取数据的函数
    4. mapActions(): 用来简化dispatch()的函数
    
## 2). store对象
    1. new Vuex.Store({}): 创建store对象
	2. new Vue({store}): 配置store对象(所有的组件都可以通过$store属性得到store对象)
	3. 对象的属性:
	    state: 注册的state对象
	    getters: 注册的getters对象
	3.对象的方法:
	    dispatch(actionName, data): 分发给action 

# 5. 将vuex引到项目中
## 1). 下载: npm install vuex --save
## 2). 使用vuex
	1.store.js
		import Vuex from 'vuex'
		export default new Vuex.Store({
			state,
			mutations,
			actions,
			getters,
			modules
		})
	2.main.js
		import store from './store.js'
		new Vue({
			store
		})
