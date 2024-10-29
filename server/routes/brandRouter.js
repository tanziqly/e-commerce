const Router = require("express");
const router = new Router();
const BrandController = require("../controllers/BrandController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("Admin"), BrandController.create);
router.get("/", BrandController.getAll);

module.exports = router;
