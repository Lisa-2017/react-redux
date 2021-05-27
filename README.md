<!-- 实现一个简单的求和案例 -->

<!-- Redux 核心API -->
(1).createStore() 创建包含指定reducer的store对象
    import {createStore} from 'redux'
    import counter from './reducers/counter'
    const store = createStore(counter)

(2).store对象 redux库最核心的管理对象
    内部维护着:   state    reducer
    核心方法:
        getState()
        dispatch(action)
        subscribe(listener)

(3).applyMiddleware() 应用上基于redux的中间件(插件库)
    import {createStore, applyMiddleware} from 'redux'
    import thunk from 'redux-thunk'  // redux异步中间件
    const store = createStore(
        counter,
        applyMiddleware(thunk) // 应用上异步中间件
    )

(4.)combineReducers()  用于合并多个reducer函数


<!-- Redux 三个核心概念 -->
(1).store.js：
        1).引入redux中的createStore函数，创建一个store
        2).createStore调用时要传入一个为其服务的reducer
        3).记得暴露store对象

(2).reducer的本质是一个函数，接收：preState,action，返回加工后的状态
    2).reducer有两个作用：初始化状态，加工状态
    3).reducer被第一次调用时，是store自动触发的，
        传递的preState是undefined,
        传递的action是:{type:'@@REDUX/INIT_a.2.b.4}

(3). action标识要执行行为的对象。包含2个方面的属性
        type: 标识属性, 值为字符串, 唯一, 必要属性
        xxx: 数据属性, 值类型任意, 可选属性

备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，需要我们在index入口文件中写检测。


<!-- 异步 -->
(1).明确：延迟的动作不想交给组件自身，想交给action
(2).何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回。
(3).具体编码：
    1).yarn add redux-thunk，并配置在store中
    2).创建action的函数不再返回一般对象，而是返回一个函数，该函数中写异步任务。
    3).异步任务有结果后，分发一个同步的action去真正操作数据。
(4).备注：异步action不是必须要写的，完全可以自己等待异步任务有结果了再去分发同步action。 


<!-- react-redux  -->
(1).明确两个概念：
    1).UI组件:不能使用任何redux的api，只负责页面的呈现、交互等。
    2).容器组件：负责和redux通信，将结果交给UI组件。
(2).如何创建一个容器组件 ———— 靠react-redux 的 connect函数
    写法：connect(mapStateToProps,mapDispatchToProps)(UI组件)
        -mapStateToProps:映射状态，返回值是一个对象
        -mapDispatchToProps:映射操作状态的方法，返回值是一个对象
(3).备注：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入

(4).给<App/>包裹一个<Provider store={store}>，可以实现：
        a.会统一给所有App下的容器件组统一传递store，（不用自己亲自给容器组件传递store了）
        b.不用再自己检测redux中状态的改变了
(5).mapDispatchToProps也可以简单的写成一个对象(底层会自动dispatch)
        connect(
            state => ({key:value}), //映射状态
            {key:xxxxxAction} //映射操作状态的方法
        )(UI组件)


<!-- 建议 -->
(1).尽量让所有的变量名标准化
(2).尽可能的从语法上触发简写形式