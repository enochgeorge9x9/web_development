class Pet{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating food!`
    }
}

class Cat extends Pet{
    constructor(name, age, liveleft = 9){
        super(name, age);
        this.liveleft = liveleft;

    }
    meow(){
        return 'MEOOOOOW'
    }
}

class Dog extends Pet{
    bark(){
        return 'WOOOOOOF'
    }
    eat(){
        return `${this.name} is eating dog food at ${this.age} years old`
    }
}

const bob = new Cat('bob' , 9);
const jimmy = new Dog('jimmy', 12);
console.log(bob.eat())
console.log(jimmy.eat())
console.log(jimmy.bark())
console.log(bob.meow())
console.log(bob)