const routeAPI = require("./routes/routeAPI")
const routeHTML = require("./routes/routeHTML")
const api = require("./routes/index")
const path = require("path")

const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001;

app.use('/api', api);
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develop/public/notes.html'))
);

app.listen(PORT, () => {
    console.log(`Navigate to http://localhost:${PORT}`)
})