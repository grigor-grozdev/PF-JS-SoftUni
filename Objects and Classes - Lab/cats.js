function solve(arr) {

    class Cat {
    
    constructor(name, age){
    this.name = name;
    this.age = age;
    }
    meow(){
    console.log(`${this.name}, age ${this.age} says Meow`);
    }
    }
    
    let cats = [];
    
    for (let catAsStr of arr ){
    let tokens = catAsStr.split(' ');
    let name = tokens[0];
    let age = tokens[1];
    
    let cat = new Cat (name, age);
    
    cats.push(cat);
    }
    
    for (let cat of cats){
    cat.meow();
    }
    
    }

solve(['Candy 1', 'Poppy 3', 'Nyx 2']);