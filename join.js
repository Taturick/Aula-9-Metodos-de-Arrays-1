const opcoes = ["Uma", "Outra", "Aquela"];

console.log(opcoes.join())
console.log(opcoes.join(""))
console.log(opcoes.join(" ou "))

function inverterTexto(texto) {
    const ArrayDeLetras = texto.split("");
    ArrayDeLetras.reverse();
console.log(ArrayDeLetras.join(""))
    
}

inverterTexto("Cubos Academy")