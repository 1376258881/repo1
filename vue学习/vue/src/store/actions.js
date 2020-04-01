import {ADD} from './mutations-type' 
export default {   
    add({state,commit},index){
        // index=1
         commit(ADD,{index})
    }   
}