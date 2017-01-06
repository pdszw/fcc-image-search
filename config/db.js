var mongoose = require('mongoose');
var conn_details = `mongodb://${process.env.DB_HOST/${process.env.DB_NAME}`;

exports.db = mongoose.connect(conn_details);
