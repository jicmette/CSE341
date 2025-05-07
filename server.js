const express = require('express');
const connectDataBase = require('./src/database/connection');
const app = express();

connectDataBase();

const port = process.env.PORT;

// Frontend static files
app.use(express.static('public'));

// Routes
app.use('/', require('./src/routes/professionalRoutes'));

// Start the server
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + port);
});