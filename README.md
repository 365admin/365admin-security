> Manage credentials 


## Install

```
$ npm install --save 365admin-security
```


## Usage
Store the credentials in the user's home directory in a file named

365ADMINSECRETS.JSON

```js
[{
    "key": "hexa00001",
    "username": "********@hexa00001.onmicrosoft.com",
    "password": "********"
}, {
    "key": "hexa00002",
    "username": "********@hexa00002.onmicrosoft.com",
    "password": "********"
}]
```

```js
var security = require('365admin-security');

var _365adminSecurity = require('..')
var userpass = _365adminSecurity.credentials.getCredentials("hexa00001","ps")

console.log(userpass.username)
```


## License

MIT © [Niels Gregers Johansen](https://www.hexatown.com)
