import { multiply } from './export';


const prog = [1, 2, 3];
let digits = new Array();

class Buildname {

    constructor(name) {
        this.name = name;
        this.number = 'Not Available';
    }
    get pnumber() {
        return this.number;
    }

    set pnumber(numb) {
        this.number = numb;
    }
    pushname() {
        return play(this.name);
    }
}

class Buildnameandamount extends Buildname {
    constructor(name, amount) {
        super(name);
        this.amount = amount;
    }
    callplay() {
        return play(this.name, this.amount);
    }
}

class CustomDate extends Date {
    constructor() {
        super();
    }
    getFormattedDate() {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'
        ];
        return this.getDate() + '-' + months[this.getMonth()] + '-' + this.getFullYear();
    }
    static today() {
        return `today`;
    }
}


// logic function
let play = (name, amount) => {

    let result = new Buildnameandamount(name, amount);

    //call to the set and get
    result.pnumber = 071234567;
    // convert an object to array
    var arr = Array.from(Object.keys(result), k => result[k]);

    // distructing
    let [x, y, z] = arr;

    console.log(`${arr} this is an array fro object`);

    function getAmount(cashamount) {
        var isAnyNegative = () => {
                // avoid negative values
                return cashamount < 0;
            },
            varisbelowmin = () => {
                //no gambling on amount less than 10
                return cashamount < 10;
            }
        var promise = new Promise(function(resolve, reject) {
            if (isAnyNegative()) {
                reject("Your account is below zero");
            } else if (varisbelowmin()) {
                reject("You don't have enough money");
            }
            resolve(cashamount);
        });
        return promise;
    }
    getAmount(amount)
        .then(function(amount) {
            function* getluckynumber(value) {
                    let index = 0;
                    while (index <= 1) {
                        yield Math.floor(Math.random() * 10 + 1);
                    }
                }
                // use generator
            let gen = getluckynumber(amount);
            let generator1 = gen.next();
            //use impoter
            let winno = multiply(generator1.value, 1);

            const usersdigits = new Set(digits);
            console.log(usersdigits);
            console.log(winno);
            // console.log(winno.value);


            if (usersdigits.has(winno.value)) {
                alert(`Congratulations ${x} your lucky number is ${winno.value} you have won ${amount * 2}, ${CustomDate.today}`);
            } else {
                alert(`Sorry ${x} todays lucky number is ${winno.value} you have lost ${amount}`);
            }

        })
        .catch(function(e) {
            console.log(e);
            alert(e);
        });

}
var getelements = () => {
        // var first = 1;
        // var second = 2;
        // var third = 3;
        // var name = 'oscar';
        // var amount = 100;
        var first = +document.getElementById('first').value;
        var second = +document.getElementById("second").value;
        var third = +document.getElementById("third").value;
        var name = document.getElementById("name").value;
        var amount = document.getElementById("amount").value;

        digits.push(first, second, third);

        let start = new Buildnameandamount(name, amount);
        start.callplay();
    }
    // getelements();