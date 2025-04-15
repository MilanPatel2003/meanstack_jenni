const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  specialization: { type: String, required: true },
  phone_number: { type: String, required: true },
  email: { type: String, required: true },
  hire_date: { type: Date, required: true },
  consultation_fee: { type: Number, required: true }
});

module.exports = mongoose.model('Doctor', DoctorSchema);
