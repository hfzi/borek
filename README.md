### Download Package
First you need to install the package
```bash
npm i borek
```

## Setup Package
You can use it by importing it into the project you are using.
```bash
es6 before " const cookie = require('borek') "
```
```bash
es6 after " import cookie from 'borek' "
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

## ".fasterMap()" method fast then ".map()"
The ".fasterMap()" method is almost twice as fast as the ".map()" ten. 
Usage is the same.
```bash
var arr = [1, 4, 3, 9, 11]
arr.fastermap(x => x > 5)
returns 9, 11
```

