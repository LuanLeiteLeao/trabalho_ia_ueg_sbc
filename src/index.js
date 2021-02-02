import { database, entrada } from "./dataBase.js"


// esta função recebe uma lista de conflitos e a entrada
// dentre a lista de conflitos é selecionado o primeiro da lista
// todos os padrões são substituídos por sua ação respectiva

const disparaRegra = (listaDeConflitos, entrada) => {
    // seleciona o primeiro da lista
    var regra = listaDeConflitos[0].data

    // um loop é rodado para remover todos os padrões da lista
    regra.padrao.map(padrao => {
            entrada.splice(entrada.indexOf(padrao), 1);
        })
        // depois que os padrões são removidos é inserido a ação que os padrões representava
    entrada.unshift(regra.acao)
        // retorna a lista modificada 
    return entrada

}

const main = () => {

    while (true) {
        let listaDeConflitos = []



        database.map(data => {

            //retorna uma lista boleana com resultada da busca dos padrões
            const testPadrao = data.padrao.map(padrao => {
                return entrada.includes(padrao)
            })

            //procura na lista se há uma posição falsa,
            //caso não ache significa que a lista não existe nem um teste falso, logo ela é válida
            //adicionar na lista de conflitos como um  padrão válido
            if (!testPadrao.includes(false)) {
                listaDeConflitos.push({
                    data
                })
            }
        })

        // caso tenha chegado no final de um loop e a lista de conflitos não menor que zero ou vazia
        // é desparada uma regra
        if (listaDeConflitos.length > 0) {

            disparaRegra(listaDeConflitos, entrada)
        }
        // caso esta lista seja vazia, que dizer que não foi encontrado nem um padrão e assim se encerra
        // o loop com o break
        else {

            break
        }
    }




    console.log(entrada)



}


main()