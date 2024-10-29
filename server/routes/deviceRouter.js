const Router = require("express");
const router = new Router();
const DeviceController = require("../controllers/DeviceController");
const checkRole = require("../middleware/checkRoleMiddleware");
router.post("/", checkRole("Admin"), DeviceController.create);
router.get("/", DeviceController.getAll);
router.get("/:id", DeviceController.getOne);
router.delete("/:id", checkRole("Admin"), DeviceController.deleteOne);

module.exports = router;
