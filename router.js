const Router = require("express");
const router = new Router();
const controller = require("./controller");
const { check } = require("express-validator");
const authMiddleware = require("./middleware/authMiddleware");

router.post("/registration", [
    check("username", "Username is required").notEmpty(),
    check("password", "Password is required").notEmpty().isLength({ min: 4, max: 20 }),
] ,controller.registration);
router.post("/login", controller.login);
router.post("/change-status", controller.changeStatus);
router.get("/users", controller.getUsers);
router.delete("/delete-user", controller.deleteUser);

module.exports = router;
