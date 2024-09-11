const inquirer = require('inquirer');
const fs = require('fs');

// Function that returns a SVG logo based on which logo is passed in
// If there is no logo, return an empty string

function createSvgLogo(answers) {
    console.log(answers);

    let svgContent = ''

    // If user selects Polyline
    if (answers.svgContent === 'Polyline') {
        svgContent = '<polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145"/>'
    }

    else if (answers.svgContent === 'Circle') {
        svgContent= '<circle cx="25" cy="75" r="20"/>'
      
      }

      else if (answers.svgContent === 'Rectangle') {
        svgContent= '<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>'
      
      }

    const svgContent = `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="50%" font-size="20" text-anchor="middle" fill="white" dy=".3em">Logo</text>
            <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
        </svg>
    `;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'logo.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Call the function to create and download the SVG logo
createSvgLogo();