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
//Todo: create Triangle class that extends Shape and implements render method to return a string representing a Triangle with specified color
class Triangle extends Shape {
    render() {
        return `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
  
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`
   

        
    }
    
}

//Todo: create Circle class that extends Shape and implements render method to return a string representing a Circle with specified color
class Circle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>

</svg>`;
    }
    
}
//Todo: create Rectangle class that extends Shape and implements render method to return a string representing a Rectangle with specified color
class Rectangle extends Shape {
    render() {
        return `
        <svg width="320" height="130" xmlns="http://www.w3.org/2000/svg">

        <rect width="300" height="300" x="10" y="10" fill="${this.color}" />
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>

</svg>`
        ;
    }
}
//Todo: export Polyline, Circle and Rectangle classes
module.exports = {
    Triangle,
    Circle,
    Rectangle
};