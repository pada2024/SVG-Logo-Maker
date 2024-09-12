const inquirer = require('inquirer');
const fs = require('fs');

/Todo: create a Shape class with color property and setColor method to set color
class Shape {
    constructor(color) {
        this.color = color;
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
        return `<circle cx="25" cy="75" r="20" width="100%" fill="${this.color}" />`;
    }
    
}
//Todo: create Triangle class that extends Shape and implements render method to return a string representing a triangle with specified color
class Rectangle extends Shape {
    render() {
        return `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.color}" />`;
    }
}
//Todo: export Polyline, Circl and Rectangle classes
module.exports = {
    Polyline,
    Circle,
    Rectangle
};