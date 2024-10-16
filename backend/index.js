const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express()
app.use(express.json());
const port = 8000
const dirTree = require('directory-tree')
app.use(cors())
app.get('/', (req, res) => {
    res.json({ result: "Hello world" })
})


app.get('/get-current-dir', async (req, res) => {
    const result = dirTree("./", { exclude: /node_modules|\.git/ });
    res.json({ result: result })

})
app.post('/read-file',async (req,res)=>{
    const filePath = await req.body;
    console.log(filePath)
    res.json({result:'all okay'})
})
app.listen(port, () => {
    console.log("Listening on port ", port)
})