### Download Package
First you need to install the package
```bash
npm i borek
```

## Setup Package
You can use it by importing it into the project you are using.
```javascript
es6 before  " const cookie = require('borek') "
```
```javascript
es6 after  " import cookie from 'borek' "
```

## Set Cookie and Update Cookie
If you want to create a new cookie, the "name" and "value" are needed.
If the cookie name is the same, it will update the existing cookie.
```bash
cookie.set(name, value)
```

## Get Cookie
You only need the "name" to read the cookie.
```bash
cookie.get(name)
```

If you want use only method, you can use like this
```javascript
es6 before  " require('borek') "
```
```javascript
es6 after  " import 'borek' "
```

## ".fasterMap()" method fast then ".map()"
The ".fasterMap()" method is almost twice as fast as the ".map()" ten. 
Usage is the same.
```bash
var arr = [1, 4, 3, 3, 9, 11]
arr.fastermap(x => x > 5)
```

```bash
returns 9, 11
```

## ".remove()" method

```bash
var arr = [1, 4, 3, 3, 9, 11]
arr.remove(3)
```

```bash
returns [1, 4, 3, 9, 11]
```

## ".removeAll()" method

```bash
var arr = [1, 4, 3, 3, 9, 11]
arr.removeAll(3)
```

```bash
returns [1, 4, 9, 11]
```