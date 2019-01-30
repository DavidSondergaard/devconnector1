const express = require("express");
const router = express.Router();

//load user model
const User = require("../../models/User");

// @route   GET api/users/test
// @desc    tests users route
// @access  public
router.get("/test", (req, res) => res.json({ msg: "api users works" }));

// @route   GET api/users/register
// @desc    Register user
// @access  public
router.post("/register", (req, res) => {
  //use mongoose to first find if the email exists.
  /**use find one to find a single email record.  when we send data through a
   * route  through a post request which will be through postman or a form,
   * we access that data through req.body.
   */
  User.findOne({ email: req.body.email }) // can access this with bodyParser.json
    .then(user => {
      // we match the email passed in with find 1 with the promise (.then)
      if (user) {
        //if the user is found with the email address
        return res.status(400).json({ email: "email already exists" }); //sending error
      } else {
        //make a new user
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        });
      } //for validation
    });
});

module.exports = router;
