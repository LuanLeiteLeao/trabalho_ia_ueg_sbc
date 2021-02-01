// import { database } from "./dataBase.js"

// console.log(database)
const dadosDoencas = [{
        regra: 1,
        padrao: ["dor de garganta", "tosse com catarro"],
        acao: "gripe",
    },
    {
        regra: 2,
        padrao: ["dor de cabeça", "manchas avermelhadas"],
        acao: "dengue",
    },
    {
        regra: 3,
        padrao: ["palidez", "unhas quebradiças"],
        acao: "anemia",
    },
    {
        regra: 4,
        padrao: ["formigamento", "dor de cabeça"],
        acao: "avc",
    },
    {
        regra: 5,
        padrao: ["catarro", "inchaço facial"],
        acao: "sinusite",
    },
];

const entrada = ["dor de cabeça", "manchas avermelhadas", "catarro", "inchaço facial"]

const desparaRegra = (listaDeConflitos, entrada, dadosDoencas) => {
    var regra = listaDeConflitos[0].doenca
        // var doenca = dadosDoencas[regra]



    regra.padrao.map(padrao => {
        entrada.splice(entrada.indexOf(padrao), 1);
    })

    entrada.unshift(regra.acao)

    return entrada

}

const main = () => {

    while (true) {
        let listaDeConflitos = []



        dadosDoencas.map(doenca => {

            // retorna uma lista de conflitos, com os padrões que foram achados
            const testPadrao = doenca.padrao.map(padrao => {
                return entrada.includes(padrao)
            })

            //procura na lista se há uma posição falsa,
            //  caso não ache adiciona na lista de conflitos
            // como um  padrão valido
            if (testPadrao.indexOf(false)) {
                listaDeConflitos.push({
                    doenca
                })

            }



        })


        if (listaDeConflitos.length > 0) {

            desparaRegra(listaDeConflitos, entrada, dadosDoencas)
        } else {

            break
        }
    }




    console.log(entrada)



}


main()