const express = require(" express ")

const app = express()

app.get('/users', (req, res) => {
    app.json({

        nome: "Francisca Figueiredo",
        empresa: 'UESB'
        
    })
})

})

app.listener(3001)

