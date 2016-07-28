/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import constants from "../src/constants";

export default {
  entityMap: {},
  blocks: [
    {
      key: "ag6qs",
      text: "related articles plugin - Megadraft Plugin",
      type: "header-two",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: []
    },
    {
      key: "9vgd",
      text: "",
      type: "atomic",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {
        type: constants.PLUGIN_TYPE,
        articles: [{key: "abcde"}]
      }
    }
  ]
};
