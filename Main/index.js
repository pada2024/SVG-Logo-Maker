const CLI = require('./lib/cli.js');

const cli = new CLI();

cli.run();

const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'UserInput',
        message: 'Please enter your text (max 3 characters):',
        
    },


    {
        type: 'list',
        name: 'Text Color?',
        list: ['white', 'black']
    },
    
    {
        type: 'list',
        name: 'Shape',
        message: 'Please choose a shape for your logo:',
        choices: [
            {
                name: 'Polyline'
            },
            {
                name: 'Circle'
            },
            {
                name: 'Rectangle'
            }
        ]

    },

    {
        type: 'list',
        name: 'Shape',
        message: 'Please choose a color for your shape:',
        choices: [
            {
                name: 'Red'
            },
            {
                name: 'Blue'
            },
            {
                name: 'Black'
            }
        ],
    },

    // Add more prompts as needed for installation, usage, etc.
]).then(answers => {
    console.log('Project Title:', answers.title);
    console.log('Project Description:', answers.description);

    // Here you can add logic to generate a logo file based on the answers
});



