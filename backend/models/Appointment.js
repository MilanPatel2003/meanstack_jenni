const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  appointment_date: { type: Date, required: true },
  appointment_time: { type: String, required: true },
  appointment_status: { type: String, default: 'Scheduled' },
  reason_for_visit: { type: String, required: true }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
