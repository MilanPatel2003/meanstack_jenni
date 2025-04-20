const mongoose = require('mongoose');

const DrugSchema = new mongoose.Schema({
  drug_id: { type: String, unique: true, required: true },
  drug_name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: mongoose.Schema.Types.Decimal128, required: true },
  stock_quantity: { type: Number, required: true },
  expiry_date: { type: Date, required: true }
});

module.exports = mongoose.model('Drug', DrugSchema);
