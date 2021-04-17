const mongoose = require('mongoose');

const TraitsSchema = new mongoose.Schema({
  weight: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  birthday: {
    type: String
  },
  name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Traits', TraitsSchema);
