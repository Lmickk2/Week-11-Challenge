const express = require("express")

const routeAPI = require("./routeAPI")
const routeHTML = require("./routeHTML")

const app = express()

app.use('/notes', routeAPI)
app.use('/notes', routeHTML)

module.exports = app