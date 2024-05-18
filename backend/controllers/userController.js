const userModel = require("../models/userModel");

const getUserController = async (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: "Get user details successful"
        })
    } catch (error) {
        console.log(error);
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


module.exports = { getUserController, deleteUserController };