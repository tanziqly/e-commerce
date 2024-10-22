import userController from "../controllers/user.controller.js";
import Router from "express";
const router = new Router();

router.post("/user", userController.createUser);
router.delete("/user/:id", userController.deleteUser);
router.get("/user/:id", userController.getUser);
router.get("/user", userController.loginUser);

export default router;
