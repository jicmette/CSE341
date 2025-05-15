const Contact = require("../models/contactsModel");

// Get all data from Contacts database
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};

// Get a single contact by Id
const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving contact" });
  }
};

// Create a new contact
const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    });

    await newContact.save();

    res
      .status(201)
      .json({ message: "Contact created successfully", id: newContact._id });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error creating contact", details: error.message });
  }
};

//Update a contact
const updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res
      .status(200)
      .json({ message: "Contact updated successfully", updatedContact });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error updating contact", details: error.message });
  }
};

// Delete a contact
const deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);

    if (!deletedContact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error deleting contact", details: error.message });
  }
};

module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
