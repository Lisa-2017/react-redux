import React,{ Component } from 'react'
import countCSS from './index.module.css'

export default class Count extends Component {
    state = { count: 0 }

    increment = () => {
        const { value } = this.selectNumber;
        const { count } = this.state;
        this.setState({
            count: count + value * 1
        })
    };

    decrement = () => {
        const { value } = this.selectNumber;
        const { count } = this.state;
        this.setState({
            count: count - value * 1
        })
    };

    incrementAsync = () => {
        const { value } = this.selectNumber;
        const { count } = this.state;
        setTimeout(() => {
            this.setState({
                count: count + value * 1
            })
        },500)

    }

    render () {
        return (
            <div>
                <h1>SUM: { this.state.count } </h1>
                <select ref={ c => this.selectNumber = c }>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
                <div>
                    <button className={ countCSS.button } onClick={ this.increment }> 同步 ＋ </button>
                    <button className={ countCSS.button } onClick={ this.decrement }> 同步 - </button>
                    <button className={ countCSS.button } onClick={ this.incrementAsync }> 异步 ＋ </button>
                </div>
            </div>
        )
    }
}
