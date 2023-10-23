import { produce } from "immer";
import { FichaModel, Sessao, StateInterface } from "./stateInterface";
import { StateManagementApi } from "./stateManagementApi";
import { randomInt } from "crypto";

//const http:HttpClient = new PlaceHolderApi();
export class StateManagementService extends StateManagementApi{ 
    state
    setState
    constructor(
        state:StateInterface, 
        setState:React.Dispatch<React.SetStateAction<StateInterface>>,
        ){
        super(state, setState);
        this.state = state
        this.setState = setState;
    }


    get State(){
        return this.state;
    }

    toggleShowNotes = (idx:number) =>{
        const newState = produce(this.state, draft => {
            draft.fichamentoAtivo.fichas[idx].showNotes = !draft.fichamentoAtivo.fichas[idx].showNotes
        })

        this.setState(newState);
    }

    ativarFichamento = (id?:number) =>{
        let fichaAtiva:any;
        try{
            if(id){
                fichaAtiva = this.State.api.fichamentos.filter(ficha => ficha.id === id)[0];
            }else{
                fichaAtiva = this.State.api.fichamentos[0];
            }
            //fichaAtiva.fichas.map(ficha=>ficha.showNotes = false);
            let fichamentoAtivoCompleto = Object.assign({...this.State.fichamentoAtivo}, fichaAtiva);
            let newState = produce(this.state, draft => {
                draft.fichamentoAtivo = {...fichamentoAtivoCompleto}
            })
            this.setState(newState);
        }catch(e){
            console.error('Erro ao ativar fichamento:', e);
        }
    }

    gravarTexto = (idx:number, text:string, tipo:'anotacao' | 'citacao') => {
        this.setState((prevState) => {
            return produce(prevState, (draft) => {
              draft.fichamentoAtivo.fichas[idx][tipo] = text;
            });
          });
    }
    gravarSessaFicha = (id:string, indexFicha:number) => {
        let novaSessao:Array<Sessao> = this.state.fichamentoAtivo.livro.sessoes.filter(sessao => sessao.id === parseInt(id));

        if(novaSessao.length ===0){
            novaSessao = [{id:0, descricao:'TODAS'}]
        }
        let novoEstado = produce(this.state, draft => {
            draft.fichamentoAtivo.fichas[indexFicha].sessao = novaSessao[0];
        })
        this.setState(novoEstado)
    }
    gravarPaginaFicha(idx:number, pagina:number){
        let novoEstado = produce(this.state, draft => {
            draft.fichamentoAtivo.fichas[idx].pagina = pagina;
        })
        this.setState(novoEstado)
    }
    adcionarNovaSessao(novaSessao:string){
        let s = [...this.state.fichamentoAtivo.livro.sessoes]
        s.push({
            id: Math.floor(Math.random() * 1001),
            descricao:novaSessao
        })

        let novoEstado = produce(this.state, draft => {
            draft.fichamentoAtivo.livro.sessoes = s
        })
        this.setState(novoEstado)
    }
    aplicarFiltroDeSessao = (filtro:Sessao) => {
        let newState = produce(this.state, draft => {
            draft.fichamentoAtivo.filtro.sessao = filtro;
        })
        this.setState(newState);
    }
    adicionarFicha=()=>{
        let ficha: FichaModel = {
            id: Math.floor(Math.random() * 1001),
            pagina: 0,
            citacao: "",
            anotacao: "",
            sessao: this.state.fichamentoAtivo.filtro.sessao || {id:0, descricao:'TODAS'},
            create_at: new Date().toString(),
            update_at: new Date().toString(),
            showNotes: false
        }
        let fichasArray = [ficha, ...this.state.fichamentoAtivo.fichas]
        let novoEstado = produce(this.state, draft => {
            draft.fichamentoAtivo.fichas = fichasArray
        })
        this.setState(novoEstado);
    }
    deletarFicha = (idx:number) => {
        let fichasArray = [...this.state.fichamentoAtivo.fichas]
        fichasArray.splice(idx, 1);
        let novoEstado = produce(this.state, draft => {
            draft.fichamentoAtivo.fichas = fichasArray
        })
        this.setState(novoEstado);
    }
   
}