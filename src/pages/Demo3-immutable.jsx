import React, { Component } from 'react'
import { Map, List, toJS } from 'immutable' // eslint-disable-line
import styles from './Demo3.module.scss'

export class Demo3 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }
  
  render() {
    const data = Map({a : {m: 1, n: 2}});
    console.log(data.get('a'))
    console.log(data.getIn(['a', 'm']));

    const list = List([ 'a', 'b', 'c' ])
    const result = list.update(2, val => val.toUpperCase())
    console.log(result.toJS())

    return (
      <div className={styles.demo3}>DEMO3</div>
    )
  }
}

export default Demo3
