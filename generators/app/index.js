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
var capitalize = require('lodash/capitalize');
var kebabCase = require('lodash/kebabCase');

module.exports = yeoman.Base.extend({

    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the legendary ' + chalk.red('generator-panto-transformer') + ' generator!'
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

        this.props.transformerName = capitalize(this.props.transformerName);
        this.props.transformerNameLowerCase = this.props.transformerName.toLowerCase();
        this.props.projectName = 'panto-transformer-' + kebabCase(this.props.transformerName).replace(/^\-/, '');

        this.fs.copyTpl(
            this.templatePath('index.js'),
            this.destinationPath('index.js'), {
                transformerName: this.props.transformerName,
                author: this.props.author
            }
        );

        this.fs.copyTpl(
            this.templatePath('test'),
            this.destinationPath('test'), {
                projectName: this.props.projectName,
                transformerName: this.props.transformerName,
                author: this.props.author
            }
        );

        this.fs.copy(
            this.templatePath('.editorconfig'),
            this.destinationPath('.editorconfig')
        );

        this.fs.copy(
            this.templatePath('.travis.yml'),
            this.destinationPath('.travis.yml')
        );

        this.fs.copy(
            this.templatePath('.eslintrc'),
            this.destinationPath('.eslintrc')
        );

        this.fs.copy(
            this.templatePath('.gitignore'),
            this.destinationPath('.gitignore')
        );

        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'), {
                projectName: this.props.projectName,
                transformerName: this.props.transformerName,
                transformerNameLowerCase: this.props.transformerNameLowerCase,
                author: this.props.author
            }
        );

        this.fs.copyTpl(
            this.templatePath('README.md'),
            this.destinationPath('README.md'), {
                projectName: this.props.projectName,
                author: this.props.author,
                transformerName: this.props.transformerName,
                transformerNameLowerCase: this.props.transformerNameLowerCase
            }
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
