> Manage credentials 


## Install

```
$ npm install --save tsfadmin-security
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
var tsfadmin_security = require('tsfadmin-security');
var userpass = tsfadmin_security.credentials.getCredentials("hexa00001","ps")

console.log(userpass.username)
```


## License

MIT © [Niels Gregers Johansen](https://www.hexatown.com)
