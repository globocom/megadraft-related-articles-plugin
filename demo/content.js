/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import {PLUGIN_TYPE} from "../src/constants";

export default {
  entityMap: {
    "0": {
      type: PLUGIN_TYPE,
      mutability: "IMMUTABLE",
      data: {
        articles: [{key: "abcde"}]
      }
    }
  },
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
      text: "*",
      type: "atomic",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0
        }
      ]
    }
  ]
};
