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
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
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
        message: 'Choose a shape for the SVG logo:',
        choices: ['Polyline','Circle', 'Rectangle'],
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter a color for the SVG logo (e.g., red, #ff0000):',
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter text to display on the logo:',
    }
]).then(answers => {
    const { shape, color, text } = answers;
    const svgLogo = createSvgLogo(shape, color, text);

    // Save the SVG to a file
    fs.writeFileSync('customLogo.svg', svgLogo);
    console.log('SVG logo created and saved as customLogo.svg');
}).catch(error => {
    console.error('Error:', error);
});