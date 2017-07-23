// schema for student being interviewed

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//passportLocalMongoose = require('passport-local-mongoose');

var studentSchema = new mongoose.Schema({
    time: { type: Number, required: true },
    name: { type: String, required: true }
});

// may need plugin??
var studentSchema = mongoose.model('Student', studentSchema);
module.exports = studentSchema;