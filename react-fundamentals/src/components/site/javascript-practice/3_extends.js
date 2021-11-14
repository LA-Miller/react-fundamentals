class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    }

    // method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    }

    // method 2
    status() {
        console.log(`Current status; ${this.type}`);
    }
}

class TrialUser extends User {
    trialEnding() {
        console.log(`your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    }
}

let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

// instance of trialUser class
let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();