/*
 * Copyright (c) 2016, Backstage <http://store.backstage.globoi.com/project/backstage/megadraft-related-articles>
 *
 * License: MIT
 */

import React, {Component} from "react";

import Icon from "./icon.js";
import constants from "./constants";
import {insertMediaBlock} from "megadraft";


export default class Button extends Component {
  constructor(props) {
    super(props);
    this.onClick = ::this.onClick;
  }

  onClick(e) {
    const data = {
      caption: "Initial plugin text"
    };

    insertMediaBlock(this.props.editorState, constants.PLUGIN_TYPE, data);
  }

  render() {
    return (
      <button className={this.props.className} type="button" onClick={this.onClick}>
        <Icon className="sidemenu__button__icon" />
      </button>
    );
  }
}