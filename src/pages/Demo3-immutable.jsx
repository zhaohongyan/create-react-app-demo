import React, { Component } from 'react'
import { Map, List, toJS } from 'immutable'

export class Demo3 extends Component {
  
  render() {
    const data = Map({a : {m: 1, n: 2}});
    console.log(data.get('a'))
    console.log(data.getIn(['a', 'm']));

    const list = List([ 'a', 'b', 'c' ])
    const result = list.update(2, val => val.toUpperCase())
    console.log(result.toJS())

    return (
      <div>DEMO3</div>
    )
  }
}

export default Demo3
