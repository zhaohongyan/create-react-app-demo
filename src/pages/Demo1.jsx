import React from 'react';
import request from '../utils/request';
import styles from './Demo1.module.scss';
import { log } from 'util';


function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

export default class Demo1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: undefined,
      currentColor: undefined,
      list: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    console.log('did')
    request('get', 'api/list.json').then((data) => {
      console.log('data', data)
      if (data.success) {
        this.setState({ list: data.data })
      }
    })
  }

  handleChange = (index, e) => {
    this.setState({
      currentIndex: index,
      currentColor: e.target.style.backgroundColor
    });
  }

  render() {
    console.log('render');

    const { list, currentIndex, currentColor } = this.state;
    return (
      <ul>
        {
          list && list.length > 0 && list.map((item, index) => {
            return <li className={styles.item} key={index} style={index === currentIndex ? { background: currentColor } : { background: randomColor() }} onClick={(e) => this.handleChange(index, e)}>{index}</li>
          })
        }
      </ul>
    );
  }
}
