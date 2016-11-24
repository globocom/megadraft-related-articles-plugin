/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* global __ */

import React, {Component} from "react";
import {MegadraftPlugin, MegadraftIcons, DraftJS} from "megadraft";

import RelatedArticle from "./RelatedArticle";


const {BlockContent, CommonBlock} = MegadraftPlugin;


export default class RelatedArticleBlock extends Component {
  constructor(props) {
    super(props);

    this._handleAddAnotherClick = ::this._handleAddAnotherClick;
    this.updateArticle = ::this.updateArticle;
    this.removeArticle = ::this.removeArticle;

    this.actions = [
      {"key": "delete", "icon": MegadraftIcons.DeleteIcon, "action": this.props.container.remove}
    ];
  }

  _handleAddAnotherClick(event) {
    event.preventDefault();
    this.props.container.updateData(
      {articles: this.props.data.articles.concat({key: DraftJS.genKey()})}
    );
  }

  updateArticle(key, field, value) {
    // Should we use immutable or helpers?
    for (let item of this.props.data.articles) {
      if (item.key === key) {
        item[field] = value;
      }
    }
    this.props.container.updateData({articles: this.props.data.articles});
  }

  removeArticle(key) {
    // Should we use immutable or helpers?
    let articles = Array();
    for (let item of this.props.data.articles) {
      if (item.key !== key) {
        articles.push(item);
      }
    }
    this.props.container.updateData({articles: articles});
  }

  render(){
    return (
      <CommonBlock {...this.props} actions={this.actions}>
        <BlockContent className="with-padding">
          {this.props.data.articles.map((item) => {
            return (
              <RelatedArticle
                key={item.key}
                item={item}
                updateArticle={this.updateArticle}
                removeArticle={this.removeArticle}
                {...this.props} />
            );
          })}
          <div className="related-articles__add-new-wrapper">
            <a href="#"
               onClick={this._handleAddAnotherClick}
               className="related-articles__add-new">
              {__("Add another link")}
            </a>
          </div>
        </BlockContent>
      </CommonBlock>
    );
  }
}
