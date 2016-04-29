import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import {Button as RButton} from 'react-toolbox';

import style from './button.scss';

export default class Button extends Component {

  static PropTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string
  }

  render() {
    let { label, className, ...other } = this.props;
    let buttonStyle = classnames(style['button'], className);

    return (
      <RButton className={buttonStyle} {...other} label={label} raised/>
    );
  }
};
