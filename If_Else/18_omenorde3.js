let a = 5;
let b = 9;
let c = 2;
let menor;

if (a <= b && a <= c){
    menor = a;
} else if (b <= a && b <= c){
    menor = b;
} else {
    menor = c;
}
console.log ("O menor número é: "+ menor);