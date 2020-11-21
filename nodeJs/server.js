const express = require(" express ")

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!!')
})

app.listener(3001)

