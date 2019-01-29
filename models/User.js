const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
UserSchema = new Schema({
  //this schema is going to have a name, email, password, avatar, and date.  we are going to use gravatar to get this avatar.  based on email from gravatar.  wordpress.com is were you do that.

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  avatar: {
    type: Date,
    default: Date.now
  }
});

//

module.exports = User = mongoose.model("users", UserSchema);
