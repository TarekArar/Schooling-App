var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
      type: String,
      required: true,
      unique: true,
      trim:3,
      minlength:3
  }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;