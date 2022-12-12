const routes = require("express").Router()
const savedNote = require("../Develop/db/savedNote")

router.get("./notes", (req,res) => {
    savedNote.note()
        .then(notes => {
            res.json(notes)
        })
    
})

router.post("./notes", (req,res) => {
    savedNote.newNote(req.body)
        .then(note => {
            res.json(note)
        })
})

module.exports = routes