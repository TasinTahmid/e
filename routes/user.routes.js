const controller = require("../controllers/user.controller");
const express = require("express");

const router = express.Router();

router.get("/", controller.getUsers);
router.get("/:id", controller.getUser);
router.post("/register", controller.createUser);
router.patch("/:id", controller.updateUser);

module.exports = router;
