const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const API = require('./routes/routeAPI')(app);
const HTML = require('./routes/routeHTML')(app);


app.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`);
});