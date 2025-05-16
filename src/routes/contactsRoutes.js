const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactsController");

// Route to get all contacts
router.get("/", getContacts);

// Route to get a single contact
router.get("/:id", getContactById);

// Route to create a new contact
router.post("/", createContact);

//Route to update a contact
router.put("/:id", updateContact);

// Route to delete a contact
router.delete("/:id", deleteContact);

module.exports = router;
