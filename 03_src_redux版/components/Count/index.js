import React,{ Component } from 'react';
import countCSS from './index.module.css';
import store from '../../redux/store';
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/action';


export default class Count extends Component {
    increament = () => {
        const { value } = this.selectNumber;
        store.dispatch(createIncrementAction(value * 1))
    }

    decreament = () => {
        const { value } = this.selectNumber;
        store.dispatch(createDecrementAction(value * 1))
    }

    increamentAsync = () => {
        const { value } = this.selectNumber;
        store.dispatch(createIncrementAsyncAction(value * 1,500))
    }
    render () {
        return (
            <div>
                <h2> SUM: { store.getState() } </h2>
                <select ref={ c => this.selectNumber = c }>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <section>
                    <button className={ countCSS.button } onClick={ this.increament }> 同步 +</button>
                    <button className={ countCSS.button } onClick={ this.decreament }> 同步 -</button>
                    <button className={ countCSS.button } onClick={ this.increamentAsync }> 异步 +</button>
                </section>
            </div>
        )
    }
}
