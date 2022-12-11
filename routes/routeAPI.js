const routes = require("express").Router()
const store = require("../Develop/db/savedNote")

router.get("./notes", (req,res) => {
    store.note()
        .then(notes => {
            res.json(notes)
        })
    
})

router.post("./notes", (req,res) => {
    store.newNote(req.body)
        .then(note => {
            res.json(note)
        })
})