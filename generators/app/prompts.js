// 'use strict';

// const chalk = require('chalk');

// module.exports = {
//     askForApplicationType,
//     askForModuleName
// };

// function askForApplicationType() {
//     if (this.existingProject) return;

//     const DEFAULT_APPTYPE = 'monolith';
//     if (this.skipServer) {
//         this.applicationType = this.configOptions.applicationType = DEFAULT_APPTYPE;
//         return;
//     }

//     const done = this.async();

//     this.prompt({
//         type: 'list',
//         name: 'applicationType',
//         message: response => this.getNumberedQuestion('Which *type* of application would you like to create?', true),
//         choices: [
//             {
//                 value: DEFAULT_APPTYPE,
//                 name: 'Monolithic application (recommended for simple projects)'
//             },
//             {
//                 value: 'microservice',
//                 name: 'Microservice application'
//             },
//             {
//                 value: 'gateway',
//                 name: 'Microservice gateway'
//             },
//             {
//                 value: 'uaa',
//                 name: '[BETA] JHipster UAA server (for microservice OAuth2 authentication)'
//             }
//         ],
//         default: DEFAULT_APPTYPE
//     }).then((prompt) => {
//         this.applicationType = this.configOptions.applicationType = prompt.applicationType;
//         done();
//     });
// }

// function askForModuleName() {
//     if (this.existingProject) return;

//     this.askModuleName(this);
//     this.configOptions.lastQuestion = this.currentQuestion;
//     this.configOptions.totalQuestions = this.totalQuestions;
// }


// prompting: function () {
  //   // Have Yeoman greet the user.
  //   this.log(yosay(
  //     'Welcome to the top-notch ' + chalk.red('generator-angular-core') + ' generator!'
  //   ));

  //   var prompts = [{
  //     type: 'confirm',
  //     name: 'someAnswer',
  //     message: 'Would you like to enable this option?',
  //     default: true
  //   },
  //   {
  //     type: 'confirm',
  //     name: 'second answer',
  //     message: 'Would you like to enable second option?',
  //     default: true
  //   }];

  //   return this.prompt(prompts).then(function (props) {
  //     // To access props later use this.props.someAnswer;
  //     this.props = props;
  //   }.bind(this));
  // },

  // writing: function () {
  //   this.fs.copy(
  //     this.templatePath('.angular-cli.json'),
  //     this.destinationPath('.angular-cli.json')
  //   );
  //   this.fs.copy(
  //     this.templatePath('.editorconfig'),
  //     this.destinationPath('.editorconfig')
  //   );
  //   this.fs.copy(
  //     this.templatePath('.gitignore'),
  //     this.destinationPath('.gitignore')
  //   );
  //   this.fs.copy(
  //     this.templatePath('karma.conf.js'),
  //     this.destinationPath('.karma.conf.js')
  //   );
  //   this.fs.copy(
  //     this.templatePath('package.json'),
  //     this.destinationPath('package.json')
  //   );
  //   this.fs.copy(
  //     this.templatePath('protractor.conf.js'),
  //     this.destinationPath('protractor.conf.js')
  //   );
  //    this.fs.copy(
  //     this.templatePath('proxy.conf.json'),
  //     this.destinationPath('proxy.conf.json')
  //   );
  //   this.fs.copy(
  //     this.templatePath('README.md'),
  //     this.destinationPath('README.md')
  //   );
  //   this.fs.copy(
  //     this.templatePath('tsconfig.json'),
  //     this.destinationPath('tscongfig.json')
  //   );
  //   this.fs.copy(
  //     this.templatePath('tslint.json'),
  //     this.destinationPath('tslint.json')
  //   );
  // },