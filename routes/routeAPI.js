const routes = require("express").Router()
const savedNote = require("../Develop/db/savedNote")
const json = require("../Develop/db/db.json")

routes.get("/notes", (req,res) => {
    fs.readFile("./Develop/db/db.json", (err,data) => {
        if(err) throw err;
        console.log(JSON.parse(data))
        res.send(data)
    })
})

routes.post('/notes', (req, res) => {
    console.info(`${req.method} adding note!`);
    console.log(req.body);
  
    const { title,text} = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
      };

      readAndAppend(newNote, "./Develop/db/db.json");
      res.json(`Note added!`);
    } else {
      res.error('Error while adding note');
    }
  });

module.exports = routes