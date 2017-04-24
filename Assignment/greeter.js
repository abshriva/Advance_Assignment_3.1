var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeter;
}());
var g = new Greeter("Hello Welcome to INDIA");
var res = g.greet();
//console.log('' + res);
document.body.innerHTML = res;
