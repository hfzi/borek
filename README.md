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

npm publish