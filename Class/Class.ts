
class User{
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    // Metodos

    register(){
        return `The user named ${this.name} is registered!`;
    }

    showAge(){
        return `The user age is ${this.age}`
    }

    showEmail(){
        return `The user Email is ${this.email}`
    }

}

let diego = new User("Diego Estela", "die.estela@gmail.com", 29);

console.log(diego);
console.log(diego.register());
console.log(diego.showAge());
console.log(diego.showEmail());


