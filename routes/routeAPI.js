const fs = require("fs");
const express = require("express");
const {
  readFromFile,
  readAndnotesend,
  writeToFile,
} = require("../helpers/fsUtils");

module.exports = function (notes) {
  notes.get("/", function (req, res) {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) {
        console.log(err);
      }
      notesData = JSON.parse(data);
      res.send(notesData);
    });
  });

  notes.get("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) {
        console.log(err);
      }
      notesData = JSON.parse(data);
      res.send(notesData);
    });
  });

  notes.post("/api/notes", function (req, res) {
    const newNote = req.body;

    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      notesData = JSON.parse(data);
      notesData.push(newNote);
      let currentNote = 1;
      notesData.forEach((note) => {
        note.id = currentNote;
        currentNote++;
        return notesData;
      });
      console.log(notesData);
      createNote = JSON.stringify(notesData);
      fs.writeFile("./db/db.json", createNote, (err, data) => {
        if (err) {
          console.log(err);
        }
      });
    });
    res.send("Note posted successfully");
  });
};
