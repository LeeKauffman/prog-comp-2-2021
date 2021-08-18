let gerenciaRedesSociais = () => {
    // cadastro de redes sociais

    let vetorRedesSociais = []
    for(let i=0; i<5; i++){
        let objeto = {
            codigo: Number(prompt(`Informe código da rede social`)),
            nome: prompt(`Informe o nome da rede social`),
            url: prompt(`Informe url da rede social`)
        }
        //inserir objeto
        vetorRedesSociais.push(objeto)
    }
    //cadastro dos usuários
    let vetorUsuarios = []
    for(let i = 0; i<5; i++){
        let objeto = {
            login: prompt(`Informe o login do usuário`),
            nome: prompt(`Informe o nome do usuário`),
            codigoRedeSocial: Number(prompt(`Informe o código da rede social`)),
            qtdePosts: Number(prompt(`Informe a qtde de Posts`))
        }
        // só faremos isso se a rede social existir

        let achou = false // assumo que não encontrei a rede social
        let j = 0 // indice do vetor de redes sociais
        while (!achou && j<5){ // sai ou porque acabou o vetor
            if (vetorRedesSociais[j].codigo == objeto.codigoRedeSocial){ // achamos
                vetorUsuarios.push(objeto) // inserimos
                achou = true
                alert(`Usuário inserido com sucesso`)

            }
            j++

        }
        if(!achou){ // acabou o vetor
            alert(`Usuário n~eo inseridi, pois a Rede Social não foi encontrada`)

        }
        i++
    }
}