class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    }

    // METHOD 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    }

    // METHOD 2
    status() {
        console.log(`Current status: ${this.type}`);
    }
}

// INSTANCE OF THE CLASS/NEW OBJECT
let anonDude = new User('Anonymous dude');

// we can now use the new instance and the . operator to access the 2 methods
anonDude.greet();
anonDude.status();

// another instance of the class
let anonLady = new User('anonymous Lady');
anonLady.greet();
anonLady.status();

// another instance of the class
let jeff = new User('Jeff');
jeff.greet();
jeff.status();

let luke = new User('Luke');
luke.greet();
luke.status();

let stan = new User('stan');
stan.greet();
stan.status();

