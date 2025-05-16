const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts Api",
    description: "Contacts Api",
  },
  host: "cse341-hr72.onrender.com",
  schemes: ["http", "https"],
  tags: [
    {
      name: "Contacts",
      description: "Operations related to contacts",
    },
  ],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./src/routes/index.js"];

// this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
