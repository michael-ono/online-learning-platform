const express = require("express");
const { getUserController, deleteUserController, getUserEmailController } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/getUser", authMiddleware, getUserController);
router.get("/getUserEmail", authMiddleware, getUserEmailController);
router.delete('/delete-user/:id', authMiddleware, deleteUserController);

module.exports = router;