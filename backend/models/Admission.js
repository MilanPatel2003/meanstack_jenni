const mongoose = require('mongoose');

const AdmissionSchema = new mongoose.Schema({
  patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  room_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  staff_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff', required: true },
  admission_date: { type: Date, required: true },
  discharge_date: { type: Date, required: true },
  admission_reason: { type: String, required: true },
  discharge_summary: { type: String, required: true }
});

module.exports = mongoose.model('Admission', AdmissionSchema);
