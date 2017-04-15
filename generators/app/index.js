'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the extraordinary ' + chalk.red('generator-api-express-docker') + ' generator!'
    ));

    const prompts = [
      {
        name: 'name',
        message: 'Project Name',
        default: path.basename(process.cwd())
      },
      {
        name: 'description',
        message: 'Description',
        default: ''
      },
      {
        name: 'license',
        message: 'License',
        default: 'UNLICENSED'
      },
      {
        name: 'projectUrl',
        message: 'Project homepage url',
        default: ''
      },
      {
        name: 'authorName',
        message: 'Author\'s Name',
        default: this.user.git.name
      },
      {
        name: 'authorURL',
        message: 'Author\'s homepage url',
        default: ''
      },
      {
        name: 'gitRepo',
        message: 'Git repository',
        default: ''
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name,
        description: this.props.description,
        license: this.props.license,
        projectUrl: this.props.projectUrl,
        authorName: this.props.authorName,
        authorURL: this.props.authorURL,
        gitRepo: this.props.gitRepo
      }
    );

    this.fs.copy(
      this.templatePath('yarn.lock'),
      this.destinationPath('yarn.lock')
    );

    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );

    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('src/app.js'),
      this.destinationPath('src/app.js')
    );

    this.fs.copy(
      this.templatePath('src/config.js'),
      this.destinationPath('src/config.js')
    );

    this.fs.copy(
      this.templatePath('Dockerfile'),
      this.destinationPath('Dockerfile')
    );
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    });
  }
};
