const userModel = require("../models/userModel");

const getUserController = async (req, res) => {
    try {
        // Assuming you have a User model with a find method
        const user = await userModel.find();

        if (!user) {
          return res.status(404).send({
            success: false,
            message: "User not found"
          });
        }

        res.status(200).send({
          success: true,
          message: "Get user successful",
          user: user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "An error occurred while retrieving user details"
        });
    }
};
const getUserEmailController = async (req, res) => {
    try {
        const user = await userModel.find({}, 'email');
        const emails = user.map(user => user.email);

        console.log(emails);

        if (!user) {
          return res.status(404).send({
            success: false,
            message: "User not found"
          });
        }

        res.status(200).send({
          success: true,
          message: "Get user successful",
          user: user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "An error occurred while retrieving user details"
        });
    }
};

const deleteUserController = async (req, res) => {
    try {
        const { id } = req.params;

        console.log("### USER ID ### - " + id);

        // Validate user ID (optional)
        if (!id) {
          return res.status(400).json({ message: "Missing user ID" });
        }

        const deletedUser = await userModel.findByIdAndDelete(id);
    
        if (!deletedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        res.status(200).json({ message: 'User deleted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
};


module.exports = { getUserController, deleteUserController, getUserEmailController };