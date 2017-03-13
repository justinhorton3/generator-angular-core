'use strict';

const generator = require('yeoman-generator');
const generatorBase = require('../generator-base');
const prompts = require('./prompts');
const util = require('util');

const JBHuntUIGenerator = generator.extend({});

util.inherits(JBHuntUIGenerator, generatorBase);

/* Constants use throughout */
const constants = require('../generator-constants');

module.exports = JBHuntUIGenerator.extend({
  constructor: function () {
    generator.apply(this, arguments);
  },
  initializing: { 
    displayLogo: function () {
      this.printGeneratorLogo();
    }
  },
  prompting: {},
  configuring: {},
  default: {},
  writing: function(){
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
  },
  install: function () {
    this.installDependencies({
      bower: false,
      npm: true,
      callback: function () {
        console.log('Everything is ready!');
      }
    });
  },
  end: {}
});


  
