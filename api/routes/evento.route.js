const express = require('express');
const app = express();
const eventoRoutes = express.Router();

// Require Business model in our routes module
let Evento = require('../models/Evento');

// Defined store route
eventoRoutes.route('/add').post(function (req, res) {
  let evento = new Evento(req.body);
  evento.save()
    .then(evento => {
      res.status(200).json({'evento': 'evento is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
eventoRoutes.route('/').get(function (req, res) {
    Evento.find(function (err, eventos){
    if(err){
      console.log(err);
    }
    else {
      res.json(eventos);
    }
  });
});

// Defined edit route
eventoRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Evento.findById(id, function (err, evento){
      res.json(evento);
  });
});

//  Defined update route
eventoRoutes.route('/update/:id').post(function (req, res) {
    Evento.findById(req.params.id, function(err, evento, next) {
    if (!evento)
      return next(new Error('Could not load Document'));
    else {
        evento.nombre = req.body.nombre;
        evento.fecha = req.body.fecha;
        evento.tipo = req.body.tipo;
        evento.capacidad = req.body.capacidad;

        evento.save().then(evento => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
eventoRoutes.route('/delete/:id').get(function (req, res) {
    Evento.findByIdAndRemove({_id: req.params.id}, function(err, evento){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = eventoRoutes;