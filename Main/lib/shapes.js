const inquirer = require('inquirer');
const fs = require('fs');


// /Todo: create a Shape class with color property and setColor method to set color
class Shape {
    constructor(color, text, textcolor) {
        this.color = color;
        this.text = text;
        this.textcolor = textcolor;
    }
    setColor(color) {
        this.color = color;
    }
}
//Todo: create Circle class that extends Shape and implements render method to return a string representing a circle with specified color
class Polyline extends Shape {
    render() {
        return `<polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145" fill="${this.color}" />`;
    }
    
}

//Todo: create Square class that extends Shape and implements render method to return a string representing a square with specified color
class Circle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>

</svg>`;
    }
    
}
//Todo: create Triangle class that extends Shape and implements render method to return a string representing a triangle with specified color
class Rectangle extends Shape {
    render() {
        return `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.color}" />`;
    }
}
//Todo: export Polyline, Circle and Rectangle classes
module.exports = {
    Polyline,
    Circle,
    Rectangle
};