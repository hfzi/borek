### Download Package
First you need to install the package
```js
npm i borek
```

## Setup Package
You can use it by importing it into the project you are using.
```js
// es6 before
const cookie = require('borek')
```
```js
// es6 after
import cookie from 'borek'
```

## Set Cookie and Update Cookie
If you want to create a new cookie, the "name" and "value" are needed.
If the cookie name is the same, it will update the existing cookie.
```js
cookie.set(name, value)
```

## Get Cookie
You only need the "name" to read the cookie.
```js
cookie.get(name)
```