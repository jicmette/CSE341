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
/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get all contacts
 *     tags:
 *       - Contacts
 */
router.get("/", getContacts);

// Route to get a single contact
/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Get a single contact by ID
 *     tags:
 *       - Contacts
 */
router.get("/:id", getContactById);

// Route to create a new contact
/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a new contact
 *     tags:
 *       - Contacts
 */
router.post("/", createContact);

//Route to update a contact
/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: Update a contact
 *     tags:
 *       - Contacts
 */
router.put("/:id", updateContact);

// Route to delete a contact
/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete a contact
 *     tags:
 *       - Contacts
 */
router.delete("/:id", deleteContact);

module.exports = router;
