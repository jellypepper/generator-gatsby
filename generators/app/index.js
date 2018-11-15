const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project name'
      },
      {
        type: 'input',
        name: 'url',
        message: 'Project URL'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description'
      },
      {
        type: 'input',
        name: 'prismicRepo',
        message: 'Prismic repository'
      },
      {
        type: 'input',
        name: 'prismicToken',
        message: 'Prismic access token'
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationRoot(),
      { props: this.answers },
      {},
      { globOptions: { dot: true } }
    );
  }

  install() {
    this.npmInstall();
  }
};
