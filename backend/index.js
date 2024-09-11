const express = require('express')
const fs = require('fs')
const app = express()
const port = 8000



app.get('/', (req, res) => {
    res.json({ result: "Hello world" })
})
app.get('/get-current-dir', async (req, res) => {
    const result = []
    
        const dirs = fs.readdirSync(".")
        for(const i in dirs){
            const stats = fs.statSync(dirs[i]);
            const structure = {}
            if(stats.isFile()){
               structure.file = dirs[i]
            }
            else{
                structure.folderName = dirs[i]
            }
            result.push(structure);
        }
        console.log(result)
    res.json({ result: "Hello world" })
})
app.listen(port, () => {
    console.log("Listening on port ", port)
})