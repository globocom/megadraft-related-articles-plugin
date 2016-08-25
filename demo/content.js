/*
 * Copyright (c) 2016, Backstage <http://store.backstage.globoi.com/project/backstage/megadraft-related-articles>
 *
 * License: MIT
 */

import constants from "megadraft-related-articles-plugin/lib/constants";

export default {
  entityMap: {
  },
  blocks: [
    {
      key: "ag6qs",
      text: "Megadraft Related Articles - Megadraft Plugin",
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
      entityRanges: [],
      data: {
        type: constants.PLUGIN_TYPE,
        articles: [
          {
            key: "abcde",
            title: "Megadraft",
            link: "http://globocom.github.io/megadraft/"
          },
          {
            key: "fghij",
            title: "Related Articles Plugin",
            link: "https://github.com/globocom/megadraft-related-articles-plugin"
          }
        ]
      }
    }
  ]
};
