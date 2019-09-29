import React, { Component, PureComponent } from 'react'
import { observer } from "mobx-react";

import todoStore from './store';

class Demo4 extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('props', this.props)
    return (
      <div>
        demo4 {todoStore.id}
      </div>
    )
  }
}

export default observer(({ todoStore, ...rest }) => <Demo4 todoStore={todoStore} {...rest} />);
