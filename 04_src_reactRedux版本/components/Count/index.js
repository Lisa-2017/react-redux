import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/action';
import countCSS from './index.module.css';

class CountUI extends Component {
    increment = () => {
        const { value } = this.selectNumber;
        this.props.optA(value * 1)
    };
    decrement = () => {
        const { value } = this.selectNumber;
        this.props.optB(value * 1)
    };
    incrementAsync = () => {
        const { value } = this.selectNumber;
        this.props.optC(value,500)
    };

    render () {
        return (
            <div>
                <h2> SUM:{ this.props.count } </h2>
                <select ref={ c => this.selectNumber = c }>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <section>
                    <button className={ countCSS.button } onClick={ this.increment }> 同步 +</button>
                    <button className={ countCSS.button } onClick={ this.decrement }> 同步 -</button>
                    <button className={ countCSS.button } onClick={ this.incrementAsync }> 异步 +</button>
                </section>
            </div>
        )
    }
};



// 方式一
// const mapStateToProps = (state,ownerProps) => {
//     return {
//         count: state,
//     }
// };


// const mapDispatchToProps = (dispatch) => {
//     return {
//         optA: number => dispatch(createIncrementAction(number)),
//         optB: number => dispatch(createDecrementAction(number)),
//         optC: (number,time) => dispatch(createIncrementAsyncAction(number,time))
//     }
// }

// 关联UI组件
export default connect(
    // mapStateToProps,
    // mapDispatchToProps,
    // 方式二：简写
    state => ({ count: state }),
    {
        optA: createIncrementAction,
        optB: createDecrementAction,
        optC: createIncrementAsyncAction
    }
)(CountUI)