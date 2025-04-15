const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  date_of_birth: { type: Date, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  phone_number: { type: String, required: true },
  email: { type: String, required: true },
  insurance_details: { type: String, required: true },
  registration_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Patient', PatientSchema);
