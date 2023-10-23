export interface StateInterface {
    api:{
        fichamentos:Array<any>
    }
    fichamentoAtivo:{
        livro: Livro
        fichas:Array<FichaModel>
        filtro:{
            sessao?:Sessao
        }
    }
}

export interface Sessao{
    id:number
    descricao:string
}

export interface Livro{
    id:number
    nome:string
    dataPublicacao:string
    autor:string
    genero:string
    editora:string
    palavraChave:string
    sessoes:Array<Sessao>
}

export interface FichaModel{
    id:number
    pagina:number
    citacao:string
    anotacao:string
    sessao: Sessao
    create_at:string
    update_at:string
    showNotes:boolean
}