# flowtype-js

A port of Simple Focus's FlowType.js without the jQuery dependency

## Usage

`npm install flowtype-js`

```javascript
const flowtype = require('flowtype-js');

flowtype(document.querySelector('#your-element'), {
 minimum   : 500,
 maximum   : 1200,
 minFont   : 12,
 maxFont   : 40,
 fontRatio : 30
});
```

See [simplefocus.com/flowtype/](http://simplefocus.com/flowtype/) for details on configuration options
