const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Rectangle } = require('./lib/shapes');

// Function to create an SVG logo based on user input
function createSvgLogo(shape, color, text) {
    let shapeElement;

    // Switch statement to determine the shape based on the different options presented to the user duting input 
    switch (shape.toLowerCase()) {
        case 'Triangle':
            shapeElement = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
            break;
        case 'Circle':
            shapeElement = `<circle cx="25" cy="75" r="20" fill="${color}" />`;
            break;
        case 'Rectangle':
            shapeElement = `<rect width="300" height="300" x="10" y="10" fill="${this.color}`;
            break;
        default:
            console.log('Invalid shape. Defaulting to circle.');
            shapeElement = `<circle cx="50" cy="50" r="40" fill="${color}" />`;
    }

    // Create the SVG string with text
    const svgLogo = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeElement}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="12">${text}</text>
    </svg>
    `;
    return svgLogo;
}

// Inquirer Prompt to prompt the user for shape, color, and text
questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your SVG logo:',
        choices: ['Triangle', 'Circle', 'Rectangle'],
    },
    {
        type: 'list',
        name: 'color',
        message: 'Enter a background color for your SVG logo (e.g., red, blue, or black):',
        choices: ['red', 'blue', 'black'],
    },

    {
        type: 'list',
        name: 'textcolor',
        message: 'Choose a text color (e.g., White or Black):',
        choices: ['white', 'black']
    },

    {
        type: 'input',
        name: 'userInput',
        message: 'Please enter your text (max 50 characters):',
        validate: function (input) {
            if (input.length > 3) {
                return 'Input must be 3 characters or less.';
            }
            return true; // Input is valid
        },
    },
];

inquirer.prompt(questions).then(answers => {





    // Save the SVG to a file

    const svgLogo = createSvgLogo(answers);
    console.log('Generated logo.svg', svgLogo);
    fs.writeFileSync(answers.shape + '.svg', svgLogo);
})
    .catch(error => {
        console.error('Error:', error);
    });


function createSvgLogo(answers) {
    let shape;
    console.log(answers);
    console.log(answers.shape);
    // If user chooses Circle
    if (answers.shape === 'Circle') {
        // Make an instance of the Circle class 
        const circle = new Circle(answers.color, answers.userInput, answers.textcolor);
        //    assigning circle to shape
        shape = circle
        console.log('User Chose Circle');
    }

    // If user choses Triangle 
    if (answers.shape === 'Triangle') {
        // Make an instance of the Triangle class 
        const triangle = new Triangle(answers.color, answers.userInput, answers.textcolor);
        //    assigning triangle to shape
        shape = triangle
        console.log('User Chose Triangle');
    }

    // If user chooses Rectangle
    if (answers.shape === 'Rectangle') {
        // Make an instance of the Rectangle class 
        const rectangle = new Rectangle(answers.color, answers.userInput, answers.textcolor);
        //    assigning rectangle to shape
        shape = rectangle
        console.log('User Chose Rectangle');
    }

    // Call render method from my shape instance
    return shape.render();
    // Need to hoist up result to send it back 
}
