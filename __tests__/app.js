'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-node-4-me:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'test',
        description: 'a beautiful test',
        license: 'MIT',
        projectUrl: 'https://myproject.github.io',
        authorName: 'John Testule',
        authorURL: 'https://johntestule.com',
        gitRepo: 'https://github.com/johntestule/test.git'
      });
  });

  it('creates files', () => {
    assert.file([
      'package.json',
      '.gitignore',
      'Dockerfile',
      '.editorconfig',
      'src/app.js',
      'src/config.js'
    ]);
  });
});
