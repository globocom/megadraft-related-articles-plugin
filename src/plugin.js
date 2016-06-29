/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import Button from "./Button";
import Block from "./Block";
import {PLUGIN_TYPE} from "./constants";

export default {
  type: PLUGIN_TYPE,
  buttonComponent: Button,
  blockComponent: Block
};
