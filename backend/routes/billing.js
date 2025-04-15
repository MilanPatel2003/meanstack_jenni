const express = require('express');
const router = express.Router();
const Billing = require('../models/Billing');

// Create Billing
router.post('/', async (req, res) => {
  try {
    const billing = new Billing(req.body);
    await billing.save();
    res.status(201).json(billing);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Billing
router.get('/', async (req, res) => {
  try {
    const billing = await Billing.find();
    res.json(billing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Billing by ID
router.get('/:id', async (req, res) => {
  try {
    const billing = await Billing.findById(req.params.id);
    if (!billing) return res.status(404).json({ error: 'Billing not found' });
    res.json(billing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Billing
router.put('/:id', async (req, res) => {
  try {
    const billing = await Billing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!billing) return res.status(404).json({ error: 'Billing not found' });
    res.json(billing);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Billing
router.delete('/:id', async (req, res) => {
  try {
    const billing = await Billing.findByIdAndDelete(req.params.id);
    if (!billing) return res.status(404).json({ error: 'Billing not found' });
    res.json({ message: 'Billing deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
