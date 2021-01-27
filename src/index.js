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

const entrada = "dor de cabeça manchas avermelhadas catarro inchaço facial"


const main = () => {


    let listaDeConflitos = []

    dadosDoencas.map(doenca => {

        // retorna uma lista boolean com os padroes achados, caso ache um padrão 
        const testPadrao = doenca.padrao.map(padrao => {
            return entrada.includes(padrao)
        })

        //procura na lista se há uma posição falsa,
        //  caso não ache adiciona na lista de conflitos
        // como um  padrão valido
        if (testPadrao.indexOf(false)) {
            listaDeConflitos.push({
                regra: doenca.regra,
                status: testPadrao
            })

        }



    })


    console.log(listaDeConflitos)


}


main()