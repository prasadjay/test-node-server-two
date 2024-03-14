const express = require('express')
const app = express()
const port = 3001

app.get('/health', (req, res) => {
    res.send(
        {
            "name": "ServerTwo"
        }
    )
})

app.listen(port, () => {
    console.log(`Server Two listening on port ${port}`)
})