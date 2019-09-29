import React, { Fragment } from 'react';
import src from './wechat.png';

export default class Demo1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
    return (
      <Fragment>
        <img src={src} alt="" />
        <img src={process.env.PUBLIC_URL + '/img/wechat.png'} alt="" />
      </Fragment>
    );
  }
}
