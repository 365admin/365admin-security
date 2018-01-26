var _ = require("lodash")
var fs = require("fs")
var userHome = require('user-home');
var tenants = []
var filename = `${userHome}/365ADMINSECRETS.JSON`

if (fs.existsSync(filename)){
     var content = fs.readFileSync(filename);
     tenants = JSON.parse(content)
}else
{

     console.warn("No credential store - create the file " +  "/" + filename )

}
module.exports.getCredentials = function (tenant, credentialType) {

    var content = fs.readFileSync(filename, "utf8")



    switch (credentialType.toUpperCase()) {
        case "PS":
            return _.find(tenants, function (o) {
                return o.key === tenant
            })
            break;

        default:
            return null
            break;
    }
}