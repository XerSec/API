'use strict';
module.exports = function(app) {
  var sessions = require('../controllers/sessionController');

  // todoList Routes
  app.route('/switch/session')
    .put(sessions.seed_session);
};
