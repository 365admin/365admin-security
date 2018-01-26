var KeyVault = require('azure-keyvault');
var AuthenticationContext = require('adal-node').AuthenticationContext;
 
var clientId = "<to-be-filled>";
var clientSecret = "<to-be-filled>";
var vaultUri = "<to-be-filled>";
 
// Authenticator - retrieves the access token 
var authenticator = function (challenge, callback) {
 
  // Create a new authentication context. 
  var context = new AuthenticationContext(challenge.authorization);
  
  // Use the context to acquire an authentication token. 
  return context.acquireTokenWithClientCredentials(challenge.resource, clientId, clientSecret, function (err, tokenResponse) {
    if (err) throw err;
    // Calculate the value to be set in the request's Authorization header and resume the call. 
    var authorizationValue = tokenResponse.tokenType + ' ' + tokenResponse.accessToken;
 
    return callback(null, authorizationValue);
  });
 
};