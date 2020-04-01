import {ADD} from './mutations-type'
export default{
    [ADD](state,{index}){
        state.count=state.count+index
    }
}