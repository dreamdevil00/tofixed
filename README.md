# Number.prototype.toFixed() rewrite

## Description

As we know, Number.prototype.toFixed() has many problems due to precision.

For example, in NodeJS 8.11.3

```javascript
(5.395).toFixed(2); // 5.39
-(5.395).toFixed(2); // -5.39
(1.395).toFixed(2); // 1.40
-(1.395).toFixed(2); // -1.4
```

and in IE9

```javascript
(5.395).toFixed(2); // 5.40
-(5.395).toFixed(2); // -5.4
(1.395).toFixed(2); // 1.40
-(1.395).toFixed(2); // -1.4
```

This lib aims to make it consistent across any environment,

and above test result will be

```javascript
(5.395).toFixed(2); // 5.40
-(5.395).toFixed(2); // -5.4
(1.395).toFixed(2); // 1.40
-(1.395).toFixed(2); // -1.40
```

## How to use

Introduce it before your code

for example:

```javascript
require('index');
// or
import './index.js';

// other codes
// ...
```
