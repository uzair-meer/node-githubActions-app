import express from "express"

const app = express();
const {PORT=5001} = process.env


app.get('/', (req, res) =>{
    res.send(`<h3> ci/cd github actions app!</h3>`)
})
app.get('/products', (req, res) =>{
    res.send([
        {
            id:1,
            prd_Name:"bottle"

        },
        {
            id:2,
            prd_Name:"box"

        }
    ])
})


app.listen(PORT, () =>{
    console.log('lisitnineif on port 5001')
})