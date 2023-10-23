import { useSharedState } from "@/app/shared/context/SharedStateContext";
import { Livro, Sessao } from "@/app/shared/context/stateInterface";
import { FunnelIcon, ChevronUpDownIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { FunctionComponent, useEffect, useState } from "react";
import Button from "../layoutComponents/button/button";
import { TypeButton } from "@/app/shared/models/typeButtons";


interface Props {
    
}
 
const AsideFichamento: FunctionComponent<Props> = () => {
  const [showAdicionarSessao, setShowAdicionarSessao] = useState(false);
  const [novaSessaoValue, setNovaSessaoValue] = useState('');
  const {stateManagementService} = useSharedState();
  const dadosLivro:Livro = stateManagementService.State?.fichamentoAtivo?.livro;

  function showAdicionarSessaoField(){
    setShowAdicionarSessao(!showAdicionarSessao);
  }
  function adcionarNovaSessao(){
    if(!novaSessaoValue) return;
    stateManagementService.adcionarNovaSessao(novaSessaoValue);
    setNovaSessaoValue('');
    setShowAdicionarSessao(false);
  }
    function aplicarFiltroDeSessao(id:string){
      let sessaoSelected:Sessao | null = null;

      if(Number(id) === 0){
        sessaoSelected = {
          id:0,
          descricao:'TODAS'
        }
      }else{
        sessaoSelected = stateManagementService.State.fichamentoAtivo.livro.sessoes.filter(sessao=>sessao.id === Number(id))[0];
      }
      stateManagementService.aplicarFiltroDeSessao(sessaoSelected);
    }

    function adicionarFicha(){
      if(stateManagementService.State.fichamentoAtivo.fichas.length > 0 &&!stateManagementService.State.fichamentoAtivo.fichas[0].citacao && !stateManagementService.State.fichamentoAtivo.fichas[0].anotacao){
        return;
      }
      
      stateManagementService.adicionarFicha();
    }

    return ( 
        <aside className="p-4 w-2/12 bg-gray-200">

        <div className="">
          <div>
            {/* <input
              type="text"
              className="placeholder:text-sm w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500 text-gray-600"
              placeholder="Pesquisar por palavra-chave"
            /> */}
          </div>
          <label 
            className="block w-100 text-sm font-medium text-indigo-400"
            htmlFor={String(stateManagementService.State.fichamentoAtivo?.livro?.id)}
          >Filtrar por Sessão</label>
          <div className="flex gap-3 items-center">
            {/* <FunnelIcon className="mx-auto h-5 w-5 text-gray-500 left-0" /> */}
            
            <select
              id={String(stateManagementService.State.fichamentoAtivo?.livro?.id)}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
              onChange={(e)=>{aplicarFiltroDeSessao(e.currentTarget.value)}}
              defaultValue={0}
            >
              <option value="0" className='text-sm text-gray-400'>
                Todas as sessões
              </option>
              {stateManagementService.State?.fichamentoAtivo?.livro.sessoes?.map(sessao => {
                
                return (
                  <option key={sessao.id} value={sessao.id}>
                    {sessao.descricao}
                  </option>
                )

              })}
            </select>
            <ChevronUpDownIcon className="h-5 w-5 align-middle absolute text-gray-500" style={{left:'13.5%'}}/>
            <PlusCircleIcon 
            onClick={showAdicionarSessaoField}
            className="h-5 w-5 align-middle absolute text-indigo-500 hover:text-indigo-800 cursor-pointer" 
            style={{left:'16.5%'}} title="adicionar sessão"/>
          </div>
          {/* <div className="mt-3">
            <input
              type="text"
              className="placeholder:text-sm w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500 text-gray-600"
              placeholder="Pesquisar por página"
            />
          </div> */}
        </div>

        {/* <div className="mt-3">
          <button
            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none"
          >
            Pesquisar
          </button>
        </div> */}
        {showAdicionarSessao && (
          <div className="mt-5 p-5 rounded bg-indigo-200 shadow absolute" style={{width:'inherit'}}>
          <input 
            type='text' 
            value={novaSessaoValue}
            onChange={(e) => setNovaSessaoValue(e.target.value)}
            className="placeholder:text-sm w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500 text-gray-600" placeholder="nome da sessão"/>
            <div className="mt-5 flex gap-3">
              <Button type={TypeButton.primary} action={adcionarNovaSessao} label="Adicionar"/>
              <Button type={TypeButton.secundary} action={showAdicionarSessaoField} label="cancelar" />

            </div>
        </div>
        )}

        <div className="mt-5">
          <Button type={TypeButton.action} action={adicionarFicha} label="Adicionar Ficha"/>
          {/* <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
            onClick={adicionarFicha}
          >
            Adicionar ficha
          </button> */}
        </div>

         


        <details id="dados-livro" className="mt-6">
          <summary>Dados do livro</summary>
          <div>
            <div className="">
              <h3 className="text-sm font-semibold text-indigo-500">livro</h3>
              <p className="text-sm text-gray-600">{dadosLivro?.nome}</p>
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-indigo-500">data publicação</h3>
              <p className="text-gray-600 text-sm">{dadosLivro?.dataPublicacao}</p>
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-indigo-500">Editora</h3>
              <p className="text-gray-600 text-sm">{dadosLivro?.editora}</p>
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-indigo-500">Autor</h3>
              <p className="text-gray-600 text-sm">{dadosLivro?.autor}</p>
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-indigo-500">gênero</h3>
              <p className="text-gray-600 text-sm">{dadosLivro?.genero}</p>
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-indigo-500">palavra-chave</h3>
              <p className="text-gray-600 text-sm">{dadosLivro?.palavraChave}</p>
            </div>

          </div>
        </details>
      </aside>
     );
}
 
export default AsideFichamento;