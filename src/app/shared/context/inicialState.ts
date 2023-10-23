import { StateInterface } from "./stateInterface";

export const inicialState: StateInterface = {
    api: {
        fichamentos: []
    },
    fichamentoAtivo: {
        livro: {
            id: 0,
            nome: '',
            dataPublicacao: '',
            autor: '',
            genero: '',
            editora: '',
            palavraChave: '',
            sessoes: [],
        },
        fichas: [],
        filtro:{
            sessao:{
                id:0,
                descricao:'TODAS'
            }
        }
    }
}