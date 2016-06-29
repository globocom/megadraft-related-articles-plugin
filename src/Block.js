/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component} from "react";

import {MegadraftPlugin, MegadraftIcons} from "megadraft";


const {BlockContent, BlockData, BlockInput, CommonBlock} = MegadraftPlugin;

import {genKey} from "draft-js";

import RelatedArticle from "./RelatedArticle";


export default class ImageBlock extends Component {
  constructor(props) {
    super(props);

    this._handleAddAnotherClick = ::this._handleAddAnotherClick;
    this.updateArticle = ::this.updateArticle;
    this.removeArticle = ::this.removeArticle;

    this.defaultFeatured = "medium";
    this.featuredOptions = [
      {"key": "medium", "icon": MegadraftIcons.MediaMediumIcon, "label": "MEDIUM"},
      {"key": "big", "icon": MegadraftIcons.MediaBigIcon, "label": "BIG"}
    ];
    this.actions = [
      {"key": "delete", "icon": MegadraftIcons.DeleteIcon, "action": this.props.container.remove}
    ];
  }

  _handleAddAnotherClick(event) {
    event.preventDefault();
    this.props.container.updateEntity(
      {articles: this.props.data.articles.concat({key: genKey()})}
    );
  }

  updateArticle(key, field, value) {
    // Should we use immutable or helpers?
    for (let item of this.props.data.articles) {
      if (item.key === key) {
        item[field] = value;
      }
    }
    this.props.container.updateEntity({articles: this.props.data.articles});
  }

  removeArticle(key) {
    // Should we use immutable or helpers?
    let articles = Array();
    for (let item of this.props.data.articles) {
      if (item.key !== key) {
        articles.push(item);
      }
    }
    this.props.container.updateEntity({articles: articles});
  }

  render(){
    return (
      <CommonBlock {...this.props}
                   featuredOptions={this.featuredOptions}
                   actions={this.actions}
                   defaultFeatured={this.defaultFeatured}>
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
              Add another link
            </a>
          </div>
        </BlockContent>
      </CommonBlock>
    );
  }
}
