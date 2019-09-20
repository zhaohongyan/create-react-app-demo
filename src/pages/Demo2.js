import React from 'react';

import '../App.css';


function randomColor () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

export default class Demo2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: undefined,
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (index, e) => {
    this.setState({
      currentIndex: index,
      currentColor: e.target.style.backgroundColor
    });
  }

  render() {
    const { currentIndex, currentColor } = this.state;
    return (
      <ul>
        {
          this.state.list.map((item, index) => {
            return <li className="item" key={index} style={ index === currentIndex ? { background: currentColor } : { background: randomColor()}} onClick={(e) => this.handleChange(index, e)}>{index}</li>
          })
        }
      </ul>
    );
  }
}
