var operatingA;
var operatingB;
var operation;

function init() {
    //variables
    var result = document.getElementById("result");
    var reset = document.getElementById("reset");
    var add = document.getElementById("add");
    var subtraction = document.getElementById("subtraction");
    var multiply = document.getElementById("multiply");
    var divide = document.getElementById("divide");
    var equal = document.getElementById("equal");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var zero = document.getElementById("zero");

    //events
    one.onclick = function(e) {
        result.textContent = result.textContent + "1";
    };
    two.onclick = function(e) {
        result.textContent = result.textContent + "2";
    };
    three.onclick = function(e) {
        result.textContent = result.textContent + "3";
    };
    four.onclick = function(e) {
        result.textContent = result.textContent + "4";
    };
    five.onclick = function(e) {
        result.textContent = result.textContent + "5";
    };
    six.onclick = function(e) {
        result.textContent = result.textContent + "6";
    };
    seven.onclick = function(e) {
        result.textContent = result.textContent + "7";
    };
    eight.onclick = function(e) {
        result.textContent = result.textContent + "8";
    };
    nine.onclick = function(e) {
        result.textContent = result.textContent + "9";
    };
    zero.onclick = function(e) {
        result.textContent = result.textContent + "0";
    };

    reset.onclick = function(e) {
        resetApp();
    };
    add.onclick = function(e) {
        operatingA = result.textContent;
        operation = "+";
        clear();
    };
    subtraction.onclick = function(e) {
        operatingA = result.textContent;
        operation = "-";
        clear();
    };
    multiply.onclick = function(e) {
        operatingA = result.textContent;
        operation = "*";
        clear();
    };
    divide.onclick = function(e) {
        operatingA = result.textContent;
        operation = "/";
        clear();
    };
    equal.onclick = function(e) {
        operatingB = result.textContent;
        resolve();
    };

    function clear() {
        result.textContent = "";
    }

    function resetApp() {
        result.textContent = "";
        operatingA = 0;
        operatingB = 0;
        operation = "";
    }

    function resolve() {
        var res = 0;
        switch (operation) {
            case "+":
                res = parseFloat(operatingA) + parseFloat(operatingB);
                break;
            case "-":
                res = parseFloat(operatingA) - parseFloat(operatingB);
                break;
            case "*":
                res = parseFloat(operatingA) * parseFloat(operatingB);
                break;
            case "/":
                res = parseFloat(operatingA) / parseFloat(operatingB);
                break;
            default:
                break;
        }
        resetApp();
        result.textContent = res;
    }
}
