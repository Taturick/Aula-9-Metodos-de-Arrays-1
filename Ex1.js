// const nome = ["Ricardo", "Galvão", "França"]

// function inverte(name){
//     name = name.reverse()
//     console.log(name)
// }
// inverte(nome)

function inverterTexto(texto) {
    const ArrayDeLetras = texto.split("");
    ArrayDeLetras.reverse();

    let textorInvertido = "";
    for (let letra of ArrayDeLetras) {
        // textorInvertido = textorInvertido +letra;
        textorInvertido += letra
    }
console.log(textorInvertido)
}

inverterTexto("Cubos Academy")