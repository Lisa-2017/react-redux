import { INCREMENT,DECREMENT } from "./constants/actionType"
/**
 * 生成action对象
 */

export const createIncrementAction = data => ({ type: INCREMENT,data })
export const createDecrementAction = data => ({ type: DECREMENT,data });
export const createIncrementAsyncAction = (data,time) => {
    return (dispatch) => { // 因为这个函数是store调用的，所以会默认将dispatch传递进来
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        },time)
    }
};