const express = require("express");
const { testUserController } = require("../controllers/testControlller");

const router = express.Router();

router.get("/dummy-get", testUserController);

router.post("/dummy-post", (req, res) => {
  const { name, email } = req.body;
  res.json({ message: `Hello ${name}, your email is ${email}` });
});

router.post("/dummyCarTest", (req, res) => {
  const { name, color, year } = req.body;
  res.send({ output: `This is a ${color} ${name}. It came out in the year ${year}` });
});

router.put("/dummy-put/:id", (req, res) => {
  const { id } = req.params;
  const { newName, newEmail } = req.body;
  res.json({
    message: `User with ID ${id} has been updated. New name: ${newName}, new email: ${newEmail}`,
  });
});

router.delete("/dummy-delete/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `User with ID ${id} has been deleted` });
});


module.exports = router;

