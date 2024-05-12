
const getUserController = async (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: "Get user details successful"
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUserController };