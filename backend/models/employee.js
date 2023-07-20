const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
  name: { type: String }, // 'String' with an uppercase 'S'
  position: { type: String }, // 'String' with an uppercase 'S'
  office: { type: String }, // 'String' with an uppercase 'S'
  salary: { type: Number },
}, 'emp');

module.exports = { Employee };
