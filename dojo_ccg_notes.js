class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost)
        this.power = power;
        this.res = res;
    }
    attack(target){
        //reduce target res by power
    }
}

// class Effect extends Card {
//     constructor(name, cost, text, stat, magnitude)
// }

play( target ) {
        if( target instanceof Unit ) {
            // implement card text here
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }