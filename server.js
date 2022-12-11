const routeAPI = require("./routes/routeAPI")
const routeHTML = require("./routes/routeHTML")

const express = require("express")
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}))
app.use("/", routeHTML)
app.use("/api", routeAPI)

app.listen(PORT, () => {
    console.log(`Navigate to http://localhost:${PORT}`)
})