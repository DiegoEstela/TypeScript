var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    // Metodos
    User.prototype.register = function () {
        return "The user named " + this.name + " is registered!";
    };
    User.prototype.showAge = function () {
        return "The user age is " + this.age;
    };
    User.prototype.showEmail = function () {
        return "The user Email is " + this.email;
    };
    return User;
}());
var diego = new User("Diego Estela", "die.estela@gmail.com", 29);
console.log(diego);
console.log(diego.register());
console.log(diego.showAge());
console.log(diego.showEmail());
