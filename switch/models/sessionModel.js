'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SessionSchema = new Schema({
  Session_Key: {
     type: String,
     trim: true,
     required: 'Need a session key to have a session key' 
    },
  Owner: {
    type: String,
    required: 'Owner of the session key'
  },
  Added_On: {
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.model('Sessions', SessionSchema);