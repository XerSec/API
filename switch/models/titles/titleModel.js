'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TitleSchema = new Schema({
  GameInfo: [{
    TitleID: {
      type: String,
      trim: true,
      required: 'Title ID of the specified title'
    },
    GameCode: {
      type: String,
      trim: true,
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
    Description: {
      type: String,
      required: 'Description of the title'
    },
    File_Size: {
      type: Number,
      require: 'Title File Size (in MB)'
    },
    Min_FW_Version: {
      type: String,
      trim: true,
      default: '0.0.0'
    },
    Released_Date: {
      type: Date,
      default: Date.now
    },
    Region: {
      type: String,
      enum: ['US', 'EU', 'JPN'],
      default: 'US'
    }  
  }],
  Publisher: {
    type: String,
    trim: true,
    required: 'Publisher of the title'
  },
  Released_Media: {
    type: [{
      type: String,
      enum: ['Physical', 'Digital']
    }],
    default: ['Digital']
  },
  Title_Features: {
    type: [{
      type: String,
      enum: ['System', 'Single Player', 'Online', 'Co-Op']
    }],
    default: ['Single Player']
  }
});

module.exports = mongoose.model('Titles', TitleSchema);