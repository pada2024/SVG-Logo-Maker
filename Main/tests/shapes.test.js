// Polyline test code 
const shape = new Polyline();
shape.setColor("red");
expect(shape.render()).toEqual('<polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145" fill="red" />');

const shape = new Polyline();
shape.setColor("blue");
expect(shape.render()).toEqual('<polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145" fill="blue" />');

const shape = new Polyline();
shape.setColor("black");
expect(shape.render()).toEqual('<polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145" fill="black" />');

// circle test code 

const shape = new Circle();
shape.setColor("red");
expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="red" />');

const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="blue" />');

const shape = new Circle();
shape.setColor("black");
expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="black" />');

//Rectangle test code 

const shape = new Rectangle();
shape.setColor("red");
expect(shape.render()).toEqual('<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="red" />');

const shape = new Rectangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="blue" />');

const shape = new Rectangle();
shape.setColor("black");
expect(shape.render()).toEqual('<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="black" />');