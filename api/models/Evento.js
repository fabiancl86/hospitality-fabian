const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Evento
let Evento = new Schema({
  nombre: {
    type: String
  },
  fecha: {
    type: Date
  },
  tipo: {
    type: String
  },
  capacidad: {
    type: Number
  }
},{
    collection: 'evento'
});

module.exports = mongoose.model('Evento', Evento);