import { INCREMENT,DECREMENT } from '../constants/actionType'
/**
 *  reducer的本质是一个函数 该文件专门用于处理count
 *  prestate ： 之前的状态
 *  action : 动作对象
 */

const defaultState = 0
export default function countReducer (prestate = defaultState,action) {
    const { type,data } = action
    switch (type) {
        case INCREMENT:
            return prestate + data;
        case DECREMENT:
            return prestate - data;
        default:
            return prestate;
    }

}