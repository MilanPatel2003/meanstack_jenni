const express = require('express');
const router = express.Router();
const Prescription = require('../models/Prescription');

// Get all prescriptions
router.get('/', async (req, res) => {
  try {
    const prescriptions = await Prescription.find();
    res.json(prescriptions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single prescription by _id or prescription_id
router.get('/:id', async (req, res) => {
  try {
    let prescription = await Prescription.findById(req.params.id);
    if (!prescription) {
      prescription = await Prescription.findOne({ prescription_id: req.params.id });
    }
    if (!prescription) return res.status(404).json({ message: 'Prescription not found' });
    res.json(prescription);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new prescription
router.post('/', async (req, res) => {
  const prescription = new Prescription(req.body);
  try {
    await prescription.save();
    res.status(201).json(prescription);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a prescription by _id or prescription_id
router.put('/:id', async (req, res) => {
  try {
    let prescription = await Prescription.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!prescription) {
      prescription = await Prescription.findOneAndUpdate({ prescription_id: req.params.id }, req.body, { new: true, runValidators: true });
    }
    if (!prescription) return res.status(404).json({ message: 'Prescription not found' });
    res.json(prescription);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a prescription by _id or prescription_id
router.delete('/:id', async (req, res) => {
  try {
    let prescription = await Prescription.findByIdAndDelete(req.params.id);
    if (!prescription) {
      prescription = await Prescription.findOneAndDelete({ prescription_id: req.params.id });
    }
    if (!prescription) return res.status(404).json({ message: 'Prescription not found' });
    res.json({ message: 'Prescription deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
