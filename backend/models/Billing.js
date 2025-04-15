const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
  patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  appointment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
  total_amount: { type: Number, required: true },
  payment_status: { type: String, default: 'Pending' },
  billing_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Billing', BillingSchema);
