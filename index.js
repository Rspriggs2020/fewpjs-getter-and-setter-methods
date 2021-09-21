const math = Math.PI
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2
    }
    get circumference() {
        return (this.radius * 2) * math
    }
    get area() {
        return math * (this.radius * this.radius)
    }
    set diameter(diameter) {
        this.radius = diameter / 2
    }
    set circumference(circumference) {
        this.radius = circumference / (math * 2)
    }

    set area(area) {
        this.radius = Math.sqrt(area / math)
    }
}