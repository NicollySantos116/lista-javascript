const op = "+";
const n1 = 10;
const n2 = 5;

switch (op) {
    case "+":
        console.log(n1 + n2);
        break;
    case "-":
        console.log(n1 - n2);
        break;
    case "*":
        console.log(n1 * n2);
        break;
    case "/":
        console.log(n1 / n2);
        break;
    default:
        console.log("Operação inválida");

}