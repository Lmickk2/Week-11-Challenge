const fs = require("fs")
const util = require("util")

const readFromFile = util.promisify(fs.readFile)
const destination = "./db/db.json"
    

const writeToFile = (destination,content) => 
    fs.writeFile(destination, JSON.stringify(content,null), err =>
    err? console.error(err) : console.info(`\nNote saved to ${destination}`)
    )
