const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ["coffee shop", "bookstore"]
  },
  location: { type: { type: String }, coordinates: [Number] }
}, {
  timestamps: true
})

const Store = mongoose.model("Store", placeSchema)

module.exports = Store