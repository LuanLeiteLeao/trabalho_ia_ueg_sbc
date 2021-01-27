interface dado {
  regra: number;
  padrao: Array<string>;
  acao: string;
}

const dadosDoencas: Array<dado> = [
  {
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

const entrada = "dor de cabeça manchas avermelhadas"

dadosDoencas.map(dadosDoenca=>{


    dadosDoenca.padrao.map(padrao=>{
        


    })

})