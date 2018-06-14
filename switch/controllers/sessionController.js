'use strict';

var mongoose = require('mongoose'),
  Session = mongoose.model('Sessions');


exports.seed_session = function(req, res) {
    Session.count({}, function (err, count) {
        if (err) {
            res.json(JSON.stringify({error: "Sessions db already seeded!"}));
        } else {
            var id = crypto.randomBytes(20).toString('hex');
            var new_session = new Session();
            new_session.Session_Ley = id;
            new_session.save(function(err, title) {
              if (err)
                res.send(err);
              res.json(title);
            });
        }
    }); 
}