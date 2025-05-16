const express = require("express");
const connectDataBase = require("./src/database/connection");
const app = express();
const professionalRoute = require("./src/routes/professionalRoutes");
const contactsRoute = require("./src/routes/contactsRoutes");
const apiDocsRoute = require("./src/routes/swagger");

connectDataBase();

const port = process.env.PORT || 8080;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

// Frontend static files
app.use(express.static("public"));

// Routes to endpoints
app.use("/professional", professionalRoute);
app.use("/contacts", contactsRoute);
app.use("/api-docs", apiDocsRoute);

// Start the server
app.listen(port, () => {
  console.log("Web Server is listening at port " + port);
  console.log(`Swagger docs avaiable at http://localhost:${port}/api-docs`);
});
