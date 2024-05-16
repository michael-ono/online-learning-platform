
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
        const { userId } = req.params.id; // Replace with your parameter name (e.g., id)
    
        // Validate user ID (optional)
        if (!userId) {
          return res.status(400).json({ message: 'Missing user ID' });
        }
    
        const deletedUser = await User.findByIdAndDelete(userId);
    
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