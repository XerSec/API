'use strict';
module.exports = function(app) {
  var titles = require('../controllers/titleController');

  // todoList Routes
  app.route('/switch/titles')
    .get(titles.list_all_titles)
    .post(titles.create_a_title);


  app.route('/switch/titles/:titleId')
    .get(titles.read_a_title)
    .put(titles.update_a_title)
    .delete(titles.delete_a_title);
};
