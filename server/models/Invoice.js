const { Schema, model } = require("mongoose");

const invoiceSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
  },
  dateOfEvent: {
    type: String,
    required: true,
  },
  package: {
    type: String,
  },
  notes: {
    type: String,
  },
  active: {
    type: Boolean,
    required: true,
  },
});

const Invoice = model("Invoice", invoiceSchema);

module.exports = { Invoice };
