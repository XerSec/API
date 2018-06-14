'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('../sessionModel')

var TitleSchema = new Schema({
  GameTitle: {
    type: String,
    trim: true,
    required: 'Game Title is required to be specified!'
  },
  GameInfo: [{
    GameCode: {
      type: String,
      trim: true,
    },
    NSUID: {
      type: String,
      required: 'NSUID not specified!"'
    },
    Title_Cover: {
      type: String,
      trim: true,
      default: ''
    },
    Name: {
      type: String,
      trim: true,
      required: 'Name of the title'
    },
    Released_Date: {
      type: String,
      default: 'N/A'
    },
    Region: {
      type: String,
      enum: ['US', 'EU', 'JPN'],
      default: 'US'
    },
  }],
  Publisher: {
    type: String,
    trim: true,
    required: 'Publisher of the title'
  }
});

module.exports = mongoose.model('Titles', TitleSchema);