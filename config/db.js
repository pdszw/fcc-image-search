var mongoose = require('mongoose');

exports.db = mongoose.connect(process.env.DB_URL);
