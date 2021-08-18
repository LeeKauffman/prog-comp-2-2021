let vet = [
    { letra: 'A', numero: 10, preco: 3.0 },
    { letra: 'B', numero: 20, preco: 2.0 },
    { letra: 'C', numero: 30, preco: 1.0 }
]
console.table(vet);



let vetor = []
for (let i = 0; i < 4; i++) {
    let objeto = new Object()
    objeto.nome = prompt(`Digite o nome do objeto`),
    objeto.quantidade = Number(prompt(`Digite a quantidade dos elementos: `))
    objeto.preco = Number(prompt(`Digite o preco: `))
    vetor.push(objeto)
}

let soma = 0
for (let i = 0; i < 4; i++) {
    soma += vetor[i].preco
}
console.log(`A média é de ${soma / 4}`);

