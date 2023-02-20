// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let p = 0
        this.sides.forEach(element => {
            p += element
        })
        return p
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides.length !== 3) {
            return false
        }
        let x = this.sides[0]
        let y = this.sides[1]
        let z = this.sides[2]
        if (x > (y+z)) {
            return false
        } else if (y > (x+z)) {
            return false
        } else if (z > (x+y)) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sides.length !== 4) {
            return false
        }
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        return ( ( side1 === side2 ) && ( side1 === side3 ) && ( side1 === side4 ) )
    }

    get area() {
        return this.sides[0] ** 2
    }
}