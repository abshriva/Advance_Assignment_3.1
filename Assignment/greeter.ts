class Greeter
{

    constructor(public greeting:string)
    {}

    public greet():string
    {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var g = new Greeter("Hello Welcome to INDIA")
var res = g.greet();
//console.log(''+res);
document.body.innerHTML = res;


