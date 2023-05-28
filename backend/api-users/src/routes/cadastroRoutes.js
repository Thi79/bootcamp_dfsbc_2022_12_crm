import express from "express";
const router = express.Router();

import controllers from "../controllers/clienteController.js";

router.get("/", controllers.getAll);
router.post("/", controllers.createUser);
router.patch("/:id", controllers.updateUserById);
router.patch("/:id", controllers.deleteUserById);


export default router;