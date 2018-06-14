'use strict';
module.exports = function(app) {
  var saves = require('../controllers/saveController');

  // todoList Routes
  app.route('/saves')
    .get(saves.list_all_saves)
    .post(saves.create_a_save);


  app.route('/saves/:saveId')
    .get(saves.read_a_save)
    .put(saves.update_a_save)
    .delete(saves.delete_a_save);
};
