import React, { Component, PureComponent } from 'react'
import { observer } from "mobx-react";

import Demo4store from './store';

class Demo4 extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      stateList: [1, 2, 3]
    }
  }

  componentDidMount() {
    const { store = {} } = this.props;
    const total = store.getTotal;
    // store.setTotal(total)
    console.log('total', store.total);
    setInterval(store.increment(), 1000) // 为什么没有生效？

    // setInterval(() => {
    //   console.log('test')
    // }, 1000)
  }

  // 当接收新的 props 时并在 setState 调用后会触发此钩子
  componentWillReact() {
    console.log("I will re-render");
  }

  render() {
    console.log('props', this.props)
    console.log('state', this.state)
    const { store = {} } = this.props;
    const { title, id, showYou, myList, myObj, total, tick } = store;

    return (
      <div>
        <h3>字符串：{title}</h3>
        <h3>数字：{id} {total}</h3>
        <h3>布尔值：{showYou ? 'is you ? ' : ''}</h3>
        <h3>tick: {tick}</h3>

      </div>
    )
  }
}

export default observer(({ store, ...rest }) => <Demo4 store={Demo4store} {...rest} />);
