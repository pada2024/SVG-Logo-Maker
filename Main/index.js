const inquirer = require('inquirer');
const fs = require('fs');

// Function to create an SVG logo based on user input
function createSvgLogo(shape, color, text) {
    let shapeElement;

    // Determine the shape based on user input
    switch (shape.toLowerCase()) {
        case 'Polyline':
            shapeElement = `<polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145 fill="${color}" />`;
            break;
        case 'Circle':
            shapeElement = `<circle cx="25" cy="75" r="20" fill="${color}" />`;
            break;
        case 'Rectangle':
            shapeElement = `<<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${color}" />`;
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

// Prompt the user for shape, color, and text
inquirer.prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your SVG logo:',
        choices: ['Polyline', 'Circle', 'Rectangle'],
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter a background color for your SVG logo (e.g., red, #ff0000):',
    },

    {
        type: 'list',
        name: 'Text Color?',
        list: ['white', 'black']
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
]);

inquirer.prompt(questions).then(answers => {
    console.log(`You entered: ${answers.userInput}`);
});

.then(answers => {
    const { shape, color, text } = answers;
    const svgLogo = createSvgLogo(shape, color, text);
    
function createSvgLogo(answers);

    // Save the SVG to a file
    fs.writeFileSync('logo.svg', svgLogo);
    console.log('Generated logo.svg');
}).catch(error => {
    console.error('Error:', error);
});