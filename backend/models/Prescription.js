const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
  prescription_id: { type: Number, unique: true, required: true },
  patient_id: { type: String, required: true }, // Should reference Patient
  doctor_id: { type: String, required: true }, // Should reference Doctor
  drug_id: { type: String, required: true }, // Should reference Drug
  dosage: { type: String, required: true },
  duration: { type: String, required: true },
  prescription_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);
