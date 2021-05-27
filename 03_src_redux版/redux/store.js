/** 
 * 该文件用于向外暴露store 对象
*/
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countReducer from './reducers/count_reducer'

export default createStore(countReducer,applyMiddleware(thunk));