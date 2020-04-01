/**
 * 所有基于state的getter计算属性的对象
 */
export default {
    evenorOdd(state){
        return state.count%2 === 0 ?'偶数':'基数';
    }
}