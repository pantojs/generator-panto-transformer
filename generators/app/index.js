/**
 * Copyright (C) 2016 yanni4night.com
 * index.js
 *
 * changelog
 * 2016-07-21[22:18:34]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var dateformat = require('dateformat');
var camelCase = require('lodash/camelCase');
var kebabCase = require('lodash/kebabCase');

module.exports = yeoman.Base.extend({

    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the legendary ' + chalk.red('panto-transformer') + ' generator!'
        ));

        var prompts = [{
            type: 'input',
            name: 'transformerName',
            message: 'Transformer name?',
            'default': this.appname
        }, {
            type: 'input',
            name: 'author',
            message: 'What\'s the author?',
            'default': this.user.git.email(),
            store: true
        }];

        return this.prompt(prompts).then(function (props) {
            this.props = props;
            done();
        }.bind(this));
    },

    writing: function () {
        this.props.transformerName = camelCase(this.props.transformerName).replace(/^pantoTransformer/i, '').replace(/^\w/, function(n){return n.toUpperCase()});
        this.props.transformerNameLowerCase = kebabCase(this.props.transformerName).toLowerCase().replace(/^\-/, '');
        this.props.projectName = 'panto-transformer-' + this.props.transformerNameLowerCase;
        this.props.funcName = this.props.transformerName.replace(/^\w/, function(n){return n.toLowerCase()});;
        this.props.datetime = dateformat('yyyy-mm-dd[HH:MM:ss]'); // 2016-07-21[22:18:34]
        this.props.copyrightDate = '2016';

        var thisYear = new Date().getFullYear();
        if (thisYear > 2016) {
            this.props.copyrightDate += '~' + thisYear;
        }

        this.fs.copyTpl(
            this.templatePath('index.js'),
            this.destinationPath('index.js'), this.props
        );

        this.fs.copyTpl(
            this.templatePath('test'),
            this.destinationPath('test'), this.props
        );

        this.fs.copy(
            this.templatePath('_editorconfig'),
            this.destinationPath('.editorconfig')
        );

        this.fs.copy(
            this.templatePath('_travis.yml'),
            this.destinationPath('.travis.yml')
        );

        this.fs.copy(
            this.templatePath('_eslintrc'),
            this.destinationPath('.eslintrc')
        );

        this.fs.copy(
            this.templatePath('_gitignore'),
            this.destinationPath('.gitignore')
        );

        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'), this.props
        );

        this.fs.copyTpl(
            this.templatePath('README.md'),
            this.destinationPath('README.md'), this.props
        );

        this.fs.copy(
            this.templatePath('LICENSE'),
            this.destinationPath('LICENSE')
        );
    },

    install: function () {
        this.npmInstall();
    }
});
