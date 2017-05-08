/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import Button from "./Button";
import Block from "./Block";
import constants from "./constants";

export default {
  title: "Related Articles",
  type: constants.PLUGIN_TYPE,
  buttonComponent: Button,
  blockComponent: Block,
  options: {
    displayOptions: [],
    defaultDisplay: null
  }
};
