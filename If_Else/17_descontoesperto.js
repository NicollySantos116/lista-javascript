let salario = 2500;
let desconto;

if (salario > 2000){
    desconto = salario  * 0.1;
} else {
    desconto = salario * 0.05;
}

let final = salario - desconto;

console.log("Salário com desconto : R$ "+ final);