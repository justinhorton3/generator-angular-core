'use strict';
const path = require('path');
const _ = require('lodash');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
// const utils = require('./generator-utils');
// // const Insight = require('insight');
// const fs = require('fs');
// const shelljs = require('shelljs');
const packagejs = require('../package.json');
// const semver = require('semver');
// const exec = require('child_process').exec;
// const os = require('os');
// const https = require('https');
// const pluralize = require('pluralize');

// const JHIPSTER_CONFIG_DIR = '.jhipster';
// const MODULES_HOOK_FILE = JHIPSTER_CONFIG_DIR + '/modules/jhi-hooks.json';
// const GENERATOR_JHIPSTER = 'generator-jhipster';

// const constants = require('./generator-constants'),
//     CLIENT_MAIN_SRC_DIR = constants.CLIENT_MAIN_SRC_DIR,
//     SERVER_MAIN_SRC_DIR = constants.SERVER_MAIN_SRC_DIR,
//     SERVER_MAIN_RES_DIR = constants.SERVER_MAIN_RES_DIR;

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
    }

    /**
     * Print Generator Title.
     */
    printGeneratorLogo() {
        this.log(' \n' +            
            chalk.yellow('      ██╗   ██████╗    ██╗  ██╗██╗   ██╗███╗   ██╗████████╗    ██╗   ██╗██╗  \n')+
            chalk.yellow('      ██║   ██╔══██╗   ██║  ██║██║   ██║████╗  ██║╚══██╔══╝    ██║   ██║██║  \n')+
            chalk.yellow('      ██║   ██████╔╝   ███████║██║   ██║██╔██╗ ██║   ██║       ██║   ██║██║  \n')+
            chalk.yellow(' ██   ██║   ██╔══██╗   ██╔══██║██║   ██║██║╚██╗██║   ██║       ██║   ██║██║  \n')+
            chalk.yellow(' ╚█████╔╝██╗██████╔╝██╗██║  ██║╚██████╔╝██║ ╚████║   ██║       ╚██████╔╝██║  \n')+
            chalk.yellow('  ╚════╝ ╚═╝╚═════╝ ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝        ╚═════╝ ╚═╝  \n')+
                                                                                        
            chalk.yellow(' ██████╗ ███████╗███╗   ██╗███████╗██████╗  █████╗ ████████╗ ██████╗ ██████╗ \n')+
            chalk.yellow('██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗\n')+
            chalk.yellow('██║  ███╗█████╗  ██╔██╗ ██║█████╗  ██████╔╝███████║   ██║   ██║   ██║██████╔╝\n')+
            chalk.yellow('██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║   ██║   ██║   ██║██╔══██╗\n')+
            chalk.yellow('╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║  ██║   ██║   ╚██████╔╝██║  ██║\n')+
            chalk.yellow(' ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝\n')
                                                                             
        );

        this.log(chalk.white.bold('https://ui.jbhunt.com/generator \n'));
        this.log(chalk.white('Welcome to the J.B. Hunt UI Generator ') + chalk.yellow('v' + packagejs.version));
        this.log(chalk.white('Documentation for creating an application: \n' + chalk.yellow('https://ui.jbhunt.com/creating-an-app/')));
        this.log(chalk.white('Application files will be generated in folder: \n' + chalk.yellow(process.cwd())));
    }
};