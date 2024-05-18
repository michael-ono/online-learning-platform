const express = require("express");
const { getUserController, deleteUserController } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get('/getUser', authMiddleware, getUserController);
router.delete('/delete-user/:id', authMiddleware, deleteUserController);

module.exports = router;