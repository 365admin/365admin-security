> Manage credentials 


## Install

```
$ npm install --save tadmin-security
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
var tadminSecurity = require('tadmin-security');
var userpass = tadminSecurity.credentials.getCredentials("hexa00001","ps")

console.log(userpass.username)
```


## License

MIT © [Niels Gregers Johansen](https://www.hexatown.com)
