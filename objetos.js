
const Time = function(nome, mundiais, apelido, localizacao) {
    this.nome = nome
    this.mundiais = mundiais
    this.apelido = apelido
    this.localizacao = localizacao
}

let time1 = new Time('Santos', 2, 'Peixão', 'São Paulo')
console.table(time1)
