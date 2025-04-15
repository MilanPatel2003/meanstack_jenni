const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  role: { type: String, required: true },
  phone_number: { type: String, required: true },
  email: { type: String, required: true },
  hire_date: { type: Date, required: true },
  salary: { type: Number, required: true }
});

module.exports = mongoose.model('Staff', StaffSchema);
