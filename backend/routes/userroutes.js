const express = require("express");
const {
  Register,
  Login,
  Deluser,
  EditUser,
} = require("../controllers/userController");
const { isAuth } = require("../middelwares/isAuth");
const {
  registerValidator,
  validation,
  loginValidator,
} = require("../middelwares/validators");

const clientRoute = express.Router();

clientRoute.post("/register", registerValidator, validation, Register);
clientRoute.post("/login", loginValidator, validation, Login);
clientRoute.get("/current", isAuth, (req, res) => {
  res.send({ client: req.user });
});
clientRoute.delete("/delclient/:id", Deluser);
clientRoute.put("/edit/:id", EditUser);
module.exports = clientRoute;
