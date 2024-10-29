const Router = require("express");
const router = new Router();
const TypeController = require("../controllers/TypeController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("Admin"), TypeController.create);
router.get("/", TypeController.getAll);

module.exports = router;
