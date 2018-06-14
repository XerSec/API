'use strict';

var mongoose = require('mongoose'),
  Title = mongoose.model('Titles');

exports.list_all_titles = function(req, res) {
  Title.find({}, function(err, title) {
    if (err)
      res.send(err);
    res.json(title);
  });
};


exports.create_a_title = function(req, res) {
  var new_save = new Title(req.body);
  new_save.save(function(err, title) {
    if (err)
      res.send(err);
    res.json(title);
  });
};


exports.read_a_title = function(req, res) {
  Title.findById(req.params.titleId, function(err, title) {
    if (err)
      res.send(err);
    res.json(title);
  });
};


exports.update_a_title = function(req, res) {
  Title.findOneAndUpdate({_id: req.params.titleId}, req.body, {new: true}, function(err, title) {
    if (err)
      res.send(err);
    res.json(title);
  });
};


exports.delete_a_title = function(req, res) {

  Title.remove({
    _id: req.params.titleId
  }, function(err, title) {
    if (err)
      res.send(err);
    res.json({ message: 'Title successfully deleted' });
  });
};

