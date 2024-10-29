const Router = require("express");
const BasketContoller = require("../controllers/BasketContoller");
const authMiddleware = require("../middleware/authMiddleware");
const router = new Router();

router.post("/:id", authMiddleware, BasketContoller.addDevice);
router.get("/", authMiddleware, BasketContoller.getBasket);

module.exports = router;
