const express = require('express')
const app = express()
const port = 3000


const users = require('./src/routes/users')

app.use('/api/users', users)
    // app.use('api/users', users)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});