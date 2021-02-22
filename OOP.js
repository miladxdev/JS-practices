// Object
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};

circle.draw();

// Factory function
function createCircle(radius) {
    return {
        radius, //  (ES6) (radius = radius)
        draw: function() {
            console.log('Circle');
        }
    }
}

const circle = createCircle(2);

// Construnctor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('DRAW');
    }
}

const another = new Circle(3);