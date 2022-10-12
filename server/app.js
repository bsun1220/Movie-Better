let express = require('express')

let app = express()

app.listen(3001)

app.get('/', (req, res) => {
    res.send('Hello World')
})