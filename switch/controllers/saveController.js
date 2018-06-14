'use strict';

var mongoose = require('mongoose'),
  Save = mongoose.model('Saves'),
  Session = mongoose.model('Sessions');

exports.list_all_saves = function(req, res) {
    Save.find({}, function(err, save) {
    if (err)
      res.send(err);
    res.json(save);
  });
};


exports.create_a_save = function(req, res) {
  var new_save = new Save(req.body);
  new_save.save(function(err, save) {
    if (err)
      res.send(err);
    res.json(save);
  });
};


exports.read_a_save = function(req, res) {
  Save.findById(req.params.saveId, function(err, save) {
    if (err)
      res.send(err);
    res.json(save);
  });
};


exports.update_a_save = function(req, res) {
  Save.findOneAndUpdate({_id: req.params.saveId}, req.body, {new: true}, function(err, save) {
    if (err)
      res.send(err);
    res.json(save);
  });
};


exports.delete_a_save = function(req, res) {

  Save.remove({
    _id: req.params.saveId
  }, function(err, save) {
    if (err)
      res.send(err);
    res.json({ message: 'Save successfully deleted' });
  });
};

