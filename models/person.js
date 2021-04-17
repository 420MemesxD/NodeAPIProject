const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    dropsDups: true
  }
}, {
  timestamps: true
});

PersonSchema.methods.getTraits = async function () {
  return await mongoose.model('Traits').find({ name: this._id });
}

module.exports = mongoose.model('Person', PersonSchema);
