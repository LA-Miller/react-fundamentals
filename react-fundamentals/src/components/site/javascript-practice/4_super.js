class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    }

    // method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    }

    // methoid 2
    status() {
        console.log(`Current status: ${this.type}`);
    }
}

class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    }
}

// instance of user class  
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

// super
class BronzeLevelUser extends User {
    constructor(username, password, ccinfo) {
        super(username, password);
        this.type = 'bronze user',
        this.ccinfo = ccinfo
    }

    getInfo() {
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}

let bronzeGuy = new BronzeLevelUser('Bronze Dude', 'bronze1234', 0000111122223333);
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);