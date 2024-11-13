const Router = require("express");
const router = new Router();
const DeviceController = require("../controllers/DeviceController");
const checkRole = require("../middleware/checkRoleMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
router.post("/", authMiddleware, checkRole("ADMIN"), DeviceController.create);
router.get("/", DeviceController.getAll);
router.get("/:id", DeviceController.getOne);
router.delete(
  "/:id",
  authMiddleware,
  checkRole("ADMIN"),
  DeviceController.deleteOne
);

module.exports = router;
