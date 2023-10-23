import { useSharedState } from '@/app/shared/context/SharedStateContext';
import React, { useEffect, useState } from 'react';
import FichaFooter from './fichaFooter';
import { FichaModel } from '@/app/shared/context/stateInterface';

// import { Container } from './styles';

interface IProps{
  ficha:FichaModel
  idx:number
}

const Ficha = (props:IProps) => {

  const {stateManagementService} = useSharedState();

  function gravarDados($event:any, tipo:'citacao'|'anotacao'){
    console.log($event)
    stateManagementService.gravarTexto(props.idx, $event.target.textContent, tipo );
  }

  useEffect(() => {
   console.log("PROPSDICHA",  stateManagementService.State.fichamentoAtivo.fichas[props.idx].citacao)
  }, [stateManagementService.State.fichamentoAtivo.fichas[props.idx]])

  return (
    <>
      
      <div className="mb-6 w-11/12 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {!props.ficha.showNotes ? (
          <div className="card-side" id="citations">
            <div className="p-6">
              <h2 className="text-md font-semibold text-indigo-200" >Citação</h2>
              <p className="w-full h-auto text-gray-600 outline-indigo-300"  contentEditable={true} autoFocus={true} onBlur={($event)=>gravarDados($event, 'citacao')}>
              {props.ficha.citacao}
              </p>
               
            </div>
          </div>
              
            ) :
            <div className="card-side" id="notes">
              <div className="p-6">
                <h2 className="text-md font-semibold text-lime-400">Anotações</h2>
                <p className="w-full h-auto text-gray-600 outline-indigo-300"  contentEditable={true} autoFocus={true} onBlur={($event)=>gravarDados($event, 'anotacao')}>
                   {props.ficha.anotacao}
                </p>
              </div>
            </div>
          
          }
          <FichaFooter idx={props.idx} />
      </div>
    </>
  )
}

export default Ficha;