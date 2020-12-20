# Related Articles Plugin - Megadraft Plugin

## Usage

Include the plugin in the `plugins` prop of your `Megadraft` instance.

```js
import React from "react";
import ReactDOM from "react-dom";
import {MegadraftEditor} from "megadraft";

import plugin from "related-articles-plugin";

class Example extends React.Component {
  render(){
    return (
      <MegadraftEditor plugins={[plugin]} />
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("container"));
```

## Contributing

Install, run, test.

```
# Install npm dependencies
make setup
# Gulp dev-server task with webpack + sass running on http://localhost:8080/
make run
# Run mocha tests + eslint
make test
```

If you're constantly running tests, there's a faster alternative using mocha's
watch feature:

```
make watch_unit
```

## Releasing

There's a `prepublish` script entry on `package.json` that runs build tasks
before publishing the package.

```
npm publish
```


## Third Party

The sample plugin uses the extension icon from https://design.google.com/icons/
under [Apache License Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
