const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to database ${mongoose.connection.host}`.white.bgMagenta);
    } catch (error) {
        console.log("DB Error,", error);
    }
};

module.exports = connectDB;