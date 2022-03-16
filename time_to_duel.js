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
        if( target instanceof Unit ) {
            target.res -= this.power;
            console.log(`${this.name} attacked ${target.name}. ${target.name}'s resilience decreased by ${this.power} and is now ${target.res}.`);
        } else {
            throw new Error( "Target must be a unit!" );
        }   
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if( target instanceof Unit ) {
            if (this.stat === "resilience"){
                target.res += this.magnitude;
                console.log(`${this.name} played on ${target.name}. ${target.name}'s resilience impacted by ${this.magnitude}. ${target.name}'s resilience is now ${target.res}.`)
            }
            if (this.stat === "power"){
                target.power += this.magnitude;
                console.log(`${this.name} played on ${target.name}. ${target.name}'s power impacted by ${this.magnitude}. ${target.name}'s power is now ${target.power}.`)
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
console.log(redBeltNinja)
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3)
console.log(hardAlgorithm)
hardAlgorithm.play(redBeltNinja)

const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)
console.log(blackBeltNinja)
const unhandledPromise = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)
console.log(unhandledPromise)
unhandledPromise.play(redBeltNinja)

const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)
console.log(pairProgramming)
pairProgramming.play(redBeltNinja)

redBeltNinja.attack(blackBeltNinja)
