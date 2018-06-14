'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('../titles/titleModel')

var SaveSchema = new Schema({
  For_Titles: [
    {
     type: String,
     trim: true 
    }
  ],
  Name: {
    type: String,
    required: 'Name/small description of the posted save file'
  },
  Description: {
    type: String,
    required: 'Description of the posted save file'
  },
  Created_On: {
    type: Date,
    default: Date.now
  },
  Version: {
    type: Number,
    default: 1
  },
  Download_Link: {
    type: String,
    required: "Can't have a save without a download to the save!"
  }
});

module.exports = mongoose.model('Saves', SaveSchema);