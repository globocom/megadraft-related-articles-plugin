/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";


export default class extends React.Component {
  render() {
    return (
      <svg {...this.props} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z"/>
          <path d="M14.485 18l-2.657 2.657L9.172 18H5.778C4.8 18 4 17.4 4 16.667V7.333C4 6.6 4.8 6 5.778 6h12.444C19.2 6 20 6.6 20 7.333v9.334C20 17.4 19.2 18 18.222 18h-3.737zM8 11h3v2H8v-2zm5 0h3v2h-3v-2zm-2-3h2v8h-2V8z" fill="currentColor"/>
        </g>
      </svg>
    );
  }
}
