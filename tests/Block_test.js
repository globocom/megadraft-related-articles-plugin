/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";
import TestUtils from "react-addons-test-utils";
import chai from "chai";
import sinon from "sinon";

import RelatedArticlesBlock from "../src/Block";

let expect = chai.expect;

describe("RelatedArticleBlock", function() {
  beforeEach(function() {
    this.data = {
      articles: [{
        key: "abcde",
        title: "Title",
        link: "globo.com"
      }, {
        key: "12345",
        title: "Title 2",
        link: "g1.globo.com"
      }]
    };

    this.updateEntity = sinon.spy();
    this.remove = sinon.spy();

    this.component = TestUtils.renderIntoDocument(
      <RelatedArticlesBlock
        data={this.data}
        container={this}
      />
    );

    this.add = TestUtils.findRenderedDOMComponentWithClass(
      this.component, "related-articles__add-new");
  });

  it("clicking on add should add an article", function() {
    TestUtils.Simulate.click(this.add);
    expect(this.updateEntity.args[0][0].articles.length).to.be.equal(3);
  });

  it("should remove an article", function() {
    this.component.removeArticle("abcde");
    expect(this.updateEntity.args[0][0].articles.length).to.be.equal(1);
  });

  it("should update an article", function() {
    this.component.updateArticle("abcde", "title", "new title");
    expect(this.updateEntity.args[0][0].articles[0].title).to.be.equal(
      "new title");
  });
});
