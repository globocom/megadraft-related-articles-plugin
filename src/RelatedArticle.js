/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* global __ */

import React, {Component} from "react";

import {MegadraftPlugin, MegadraftIcons} from "megadraft";


const {BlockInput} = MegadraftPlugin;


export default class RelatedArticle extends Component {
  constructor(props) {
    super(props);

    this._handleTitleChange = ::this._handleTitleChange;
    this._handleLinkChange = ::this._handleLinkChange;
    this._handleDeleteClick = ::this._handleDeleteClick;
  }

  _handleTitleChange(event) {
    this.props.updateArticle(this.props.item.key, "title", event.target.value);
  }

  _handleLinkChange(event) {
    this.props.updateArticle(this.props.item.key, "link", event.target.value);
  }

  _handleDeleteClick(event) {
    this.props.removeArticle(this.props.item.key);
  }

  render() {
    return (
      <div className="related-articles">
        <div className="related-articles__inputs">
          <BlockInput
            placeholder={__("Title")}
            styles={{padding: "small", text: "big"}}
            value={this.props.item.title}
            onChange={this._handleTitleChange} />
          <BlockInput
            placeholder={__("Link")}
            value={this.props.item.link}
            styles={{padding: "small"}}
            onChange={this._handleLinkChange} />
        </div>
        <div className="related-articles__trash" onClick={this._handleDeleteClick}>
          <MegadraftIcons.DeleteIcon/>
        </div>
      </div>
    );
  }
}
