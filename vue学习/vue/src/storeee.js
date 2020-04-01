import  Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state={ //初始值
    count:0
}
const mutations={
    ADD(state,index){
        state.count=state.count+index
    }
}
const actions={
    add({state,commit},index){
       // index=1
        commit('ADD',index)
       
    }    
}
const getters={
    evenorOdd(state){
        return state.count%2 === 0 ?'偶数':'基数';
      }
}
export  default new Vuex.Store({
    state,  //状态对象
    mutations,       //包含多个更新state函数的对象
    actions,    //包含多个对应事件回调函数的对象
    getters  //包含多个getters计算属性函数的对象
})