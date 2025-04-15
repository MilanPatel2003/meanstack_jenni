const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  room_type: { type: String, required: true },
  room_number: { type: Number, required: true },
  bed_capacity: { type: Number, required: true },
  availability_status: { type: String, default: 'Available' },
  daily_rate: { type: Number, required: true }
});

module.exports = mongoose.model('Room', RoomSchema);
