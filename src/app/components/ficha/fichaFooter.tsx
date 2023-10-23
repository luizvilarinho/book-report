import { useSharedState } from '@/app/shared/context/SharedStateContext';
import { Sessao } from '@/app/shared/context/stateInterface';
import React, { useState } from 'react';
import Button from '../layoutComponents/button/button';
import { TypeButton } from '@/app/shared/models/typeButtons';
import { ChevronUpDownIcon, TrashIcon } from '@heroicons/react/24/solid';

// import { Container } from './styles';
interface Iprops{
 idx:number
}
const FichaFooter = (props:Iprops) => {
  const { stateManagementService } = useSharedState();

  const ficha = stateManagementService.State.fichamentoAtivo.fichas[props.idx];

    function toggleCardSide() {
      stateManagementService.toggleShowNotes(props.idx)
        // const card = document.querySelector('.w-11/12');
        // card?.classList.toggle('show-notes');
      }

    function gravarNovaSessao(novaSessao:string){
      console.log("NOVA SESSAO", novaSessao)
      stateManagementService.gravarSessaFicha(novaSessao, props.idx);
    }
    function gravarPagina(novaPagina:string){
      
      if(!novaPagina || isNaN(Number(novaPagina))) return
      
      let pagina:number = 0
      pagina = Number(novaPagina)
      stateManagementService.gravarPaginaFicha(props.idx, pagina);
    }
    function deletarFicha(){
      stateManagementService.deletarFicha(props.idx);
    }

  return (
    <>
    <div className="border-t p-3 flex justify-between border-indigo-200">
            <div className='text-indigo-400' >Pag. <span contentEditable={true} onBlur={($event)=>gravarPagina($event.target.textContent || '')}>{ficha.pagina}</span></div>
              <div className='text-indigo-400'>
                <div className="">
                    <select
                      className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                      onChange={(e)=>gravarNovaSessao(e.currentTarget.value)}
                      defaultValue={ficha.sessao.id}
                    >
                      <option value="" className='text-sm text-gray-400'>
                        Selecione uma sessão
                      </option>
                      {stateManagementService.State?.fichamentoAtivo?.livro.sessoes?.map(sessao => {
                        return (
                          <option key={sessao.id} value={sessao.id} selected={ sessao.id === ficha.sessao.id}>
                            {sessao.descricao}
                          </option>
                        )
                       })}
                    </select>
                    <ChevronUpDownIcon className="h-5 w-5 align-middle absolute text-gray-500" style={{margin:'-1.9% 11%'}}/>
                </div>
              </div>
              <Button type={ficha.showNotes? TypeButton.inline : TypeButton.inlineAnotacao } action={toggleCardSide} label={ficha.showNotes? 'ver citação ' : 'ver anotação'}/>
            {/* <div onClick={toggleCardSide} className={`${ficha.showNotes?'text-indigo-400':'text-teal-300'} cursor-pointer`}>{ficha.showNotes? 'ver citaçãos' : 'ver anotações'}</div> */}
          <div className='text-indigo-400' onClick={deletarFicha}>
            <TrashIcon className='h-6 w-6 cursor-pointer' />
          </div>
        </div>
    </>
  )
}

export default FichaFooter;