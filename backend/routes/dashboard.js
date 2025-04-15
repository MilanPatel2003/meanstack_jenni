const express = require('express');
const router = express.Router();

// Import models
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');
const Admission = require('../models/Admission');
const Billing = require('../models/Billing');

// GET /api/dashboard/summary
router.get('/summary', async (req, res) => {
  try {
    const [totalPatients, totalDoctors, totalAppointments, totalAdmissions, totalBillings] = await Promise.all([
      Patient.countDocuments(),
      Doctor.countDocuments(),
      Appointment.countDocuments(),
      Admission.countDocuments(),
      Billing.countDocuments(),
    ]);
    res.json({
      totalPatients,
      totalDoctors,
      totalAppointments,
      totalAdmissions,
      totalBillings
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dashboard summary', details: error.message });
  }
});

module.exports = router;
