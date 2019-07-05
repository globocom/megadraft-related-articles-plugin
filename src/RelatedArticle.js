/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* global __ */

import React, {Component} from "react";

import {MegadraftPlugin, MegadraftIcons} from "megadraft";


const {BlockInput} = MegadraftPlugin;

const errorStyle = {
  fontSize: 12,
  color: "rgb(244, 67, 54)",
  textAlign: "left",
};
export default class RelatedArticle extends Component {
  constructor(props) {
    super(props);
    this.state={ error: false };

    this._handleTitleChange = ::this._handleTitleChange;
    this._handleLinkChange = ::this._handleLinkChange;
    this._handleDeleteClick = ::this._handleDeleteClick;
  }

  checkLink(link) {
    const regexp = /^(http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
    return regexp.test(link) ? true : false;
  }

  _handleTitleChange(event) {
    this.props.updateArticle(this.props.item.key, "title", event.target.value);
  }

  _handleLinkChange(event) {
    if(this.checkLink(event.target.value)) {
      this.setState({error: false});
      this.props.updateArticle(this.props.item.key, "link", event.target.value);
    } else {
      this.setState({error: true});
      this.props.updateArticle(this.props.item.key, "link", event.target.value);
    }
  }

  _handleDeleteClick(event) {
    this.props.removeArticle(this.props.item.key);
  }

  render() {
    const { error } = this.state;

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
            onChange={this._handleLinkChange} 
            error= {error && <p style={errorStyle}>{"Link Inválido"}</p>} 
          />
        </div>
        <div className="related-articles__trash" onClick={this._handleDeleteClick}>
          <MegadraftIcons.DeleteIcon/>
        </div>
      </div>
    );
  }
}
