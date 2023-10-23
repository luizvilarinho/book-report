import { produce } from 'immer';
import { HttpClient } from "@/app/services/httpClient";
import { PlaceHolderApi } from "@/app/services/placeHolderApi";
import { StateInterface } from "./stateInterface";

export class StateManagementApi {
    state
    setState
    constructor(
        State: StateInterface, 
        setState:React.Dispatch<React.SetStateAction<StateInterface>>
        ){
        this.state = State
        this.setState = setState
    }

    getDataFromHttpClient = async () => {
        //if (Object.keys(this.state.fichamentoAtivo).length > 0) return 
        let http:HttpClient = new PlaceHolderApi();
        
        try {
            const apiData = await http.getData();
            let newState = produce(this.state, draft => {
                draft.api.fichamentos = apiData.data.fichamentos
            })
            this.setState(newState);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }
}