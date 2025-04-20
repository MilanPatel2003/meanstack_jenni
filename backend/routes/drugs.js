const express = require('express');
const router = express.Router();
const Drug = require('../models/Drug');

// Get all drugs
router.get('/', async (req, res) => {
  try {
    const drugs = await Drug.find();
    // Convert price from Decimal128 to string for frontend
    const formattedDrugs = drugs.map(drug => {
      const drugObj = drug.toObject();
      if (drugObj.price && typeof drugObj.price === 'object' && typeof drugObj.price.toString === 'function') {
        drugObj.price = drugObj.price.toString();
      }
      return drugObj;
    });
    res.json(formattedDrugs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single drug by _id or drug_id
router.get('/:id', async (req, res) => {
  try {
    let drug = await Drug.findById(req.params.id);
    if (!drug) {
      drug = await Drug.findOne({ drug_id: req.params.id }); // drug_id is a string, do not cast
    }
    if (!drug) return res.status(404).json({ message: 'Drug not found' });
    const drugObj = drug.toObject();
    if (drugObj.price && typeof drugObj.price === 'object' && typeof drugObj.price.toString === 'function') {
      drugObj.price = drugObj.price.toString();
    }
    res.json(drugObj);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new drug
router.post('/', async (req, res) => {
  const drug = new Drug(req.body);
  try {
    await drug.save();
    res.status(201).json(drug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a drug by _id or drug_id
router.put('/:id', async (req, res) => {
  try {
    let drug = await Drug.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!drug) {
      drug = await Drug.findOneAndUpdate({ drug_id: req.params.id }, req.body, { new: true, runValidators: true });
    }
    if (!drug) return res.status(404).json({ message: 'Drug not found' });
    res.json(drug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a drug by _id or drug_id
router.delete('/:id', async (req, res) => {
  try {
    let drug = await Drug.findByIdAndDelete(req.params.id);
    if (!drug) {
      drug = await Drug.findOneAndDelete({ drug_id: req.params.id });
    }
    if (!drug) return res.status(404).json({ message: 'Drug not found' });
    res.json({ message: 'Drug deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
