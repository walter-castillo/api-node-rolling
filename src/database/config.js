//conexión a mi BD
const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log("Base de datos online", process.env.MONGODB_CNN);
    } catch (error) {
        console.log(error);
        throw new Error("No se pudo conectar a la base de datos");
    }
};

module.exports = {
    dbConnection
};