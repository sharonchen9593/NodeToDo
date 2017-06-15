var configValue = require('./config');

module.exports = {
    getDbConnectionString: function() { // set up connection to database
        return 'mongodb://' + configValue.uname + ':' + configValue.pwd + '@ds127802.mlab.com:27802/sharonnodetodo'
    }
}



