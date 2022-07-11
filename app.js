const express = require('express')
const app = express()
const port = 3000

const { dbConnection } = require('./src/database/config')

const users = require('./src/routes/user')

dbConnection()

app.use(express.json());
app.use(express.static("public"));

app.use('/api/users', users)

app.listen(port, () => console.log(`Serevidor corriendo en el puerto ${port}`));