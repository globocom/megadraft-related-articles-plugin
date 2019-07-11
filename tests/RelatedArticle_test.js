/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import chai from "chai";
import sinon from "sinon";

import RelatedArticle from "../src/RelatedArticle";

let expect = chai.expect;

describe("RelatedArticle", function() {
  beforeEach(function() {
    this.data = {
      key: "abcde",
      title: "Test",
      link: "globo.com"
    };

    const linkValidator = {
      props: {
        blockProps: {
          plugin: {
            hasLinkValidator: false
          }
        }
      }
    };

    this.removeArticle = sinon.spy();
    this.updateArticle = sinon.spy();

    this.component = ReactTestUtils.renderIntoDocument(
      <RelatedArticle
        item={this.data}
        removeArticle={this.removeArticle}
        updateArticle={this.updateArticle}
        container={linkValidator}
      />
    );

    this.exclude = ReactTestUtils.findRenderedDOMComponentWithClass(
      this.component, "related-articles__trash");

    this.title = ReactTestUtils.scryRenderedDOMComponentsWithTag(this.component, "input")[0];
    this.link = ReactTestUtils.scryRenderedDOMComponentsWithTag(this.component, "input")[1];
  });

  it("clicking on the remove should remove an article", function() {
    ReactTestUtils.Simulate.click(this.exclude);
    expect(this.removeArticle.calledWith(this.data.key)).to.be.true;
  });

  it("renders title from data", function() {
    expect(this.title.value).to.be.equal(this.data.title);
  });

  it("renders link from data", function() {
    expect(this.link.value).to.be.equal(this.data.link);
  });

  it("updates entity on title change", function () {
    this.title.value = "new title";
    ReactTestUtils.Simulate.change(this.title);
    expect(this.updateArticle.calledWith(
      this.data.key,
      "title",
      "new title"
    )).to.be.true;
  });

  it("updates entity on link change", function () {
    this.link.value = "new link";
    ReactTestUtils.Simulate.change(this.link);
    expect(this.updateArticle.calledWith(
      this.data.key,
      "link",
      "new link"
    )).to.be.true;
  });
});
