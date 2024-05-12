const testUserController = (req, res) => {
  try {
    res.status(200);
    res.send({
      success: true,
      message: "this is Test User API Data Page",
    });
  } catch (err) {
    console.log("error in Test API", err);
  }
};

module.exports = { testUserController };