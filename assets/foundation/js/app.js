const prog = [1, 2, 3];
let digits = new Array();

function ite() {
    arg = Array.from(arguments);
    return arg.reduce((prev, curr) => prev + curr);
}

let play = (name) => {
        // let c = document.getElementById("varE");
        // var first = document.getElementById("varB");
        // var second = document.getElementById("varC");
        // var third = document.getElementById("varD");
        // var name = document.getElementById("varA");

        console.log(digits);

        let [q, w, e] = digits;

        // const prog = 098;
        // console.log(prog);

        //call the shorthand
        console.log(getname(name, "098"));

        let result = getname(name, "098");

        //convert an object to array
        var arr = Array.from(Object.keys(result), k => result[k]);

        // distructing
        let [x, y, z] = arr;

        //spread arrays in 
        let one = [q, w, e, ...prog];

        // distruction
        let [a, b, ...theRest] = one;

        console.log(ite(a, b, ...theRest));
        if (ite(a, b, ...theRest) <= 15) {
            alert(`${x} you became a winner at ${z} , you gave values that add upto ${ite(a, b, ...theRest)} `);
        } else {
            alert(x + 'at' + z + ' , you gave values that add upto' + ite(a, b, ...theRest));
        }

    }
    // Object shorthand and method shorthand using fat arrow
let getname = (name, number) => {
    return {
        name,
        number,
        timestamp: Date.now()
    }
}

var getelements = () => {
        // var first = 1;
        // var second = 2;
        // var third = 3;
        // var name = 'oscar';
        var first = +document.getElementById('first').value;
        var second = +document.getElementById("second").value;
        var third = +document.getElementById("third").value;
        var name = document.getElementById("name").value;

        digits.push(first, second, third);

        play(name);
    }
    // getelements();