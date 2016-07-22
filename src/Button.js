/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component} from "react";
import {DraftJS, insertMediaBlock} from "megadraft";


import Icon from "./icon.js";
import constants from "./constants";


export default class Button extends Component {
  constructor(props) {
    super(props);
    this.onClick = ::this.onClick;
  }

  onClick(e) {
    const data = {articles: [{key: DraftJS.genKey()}]};
    this.props.onChange(insertMediaBlock(this.props.editorState, constants.PLUGIN_TYPE, data));
  }

  render() {
    return (
      <button className={this.props.className} type="button" onClick={this.onClick}>
        <Icon className="sidemenu__button__icon" />
      </button>
    );
  }
}
