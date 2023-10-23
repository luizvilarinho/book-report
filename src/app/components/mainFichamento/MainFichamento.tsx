import { useSharedState } from '@/app/shared/context/SharedStateContext';
import React, { Suspense, useEffect, useState } from 'react';
import Ficha from '../ficha/Ficha';
import Loading from '@/app/loading';

// import { Container } from './styles';

const MainFichamento: React.FC = () => {

    const { stateManagementService } = useSharedState();
    const filtroDeSessao = stateManagementService.State.fichamentoAtivo?.filtro?.sessao;

    useEffect(() => {
      stateManagementService.getDataFromHttpClient();
    },[])

    useEffect(() => {
      //@TODO fazer lógica de gravar o id do último fichamento no localStorage
      stateManagementService.ativarFichamento()
     
    },[stateManagementService.state.api.fichamentos])
 
    function deleteTest(){
      void(0)
    }
    
  return (
      <main className="flex-1 p-4 bg-gray-200">
        {stateManagementService.state.fichamentoAtivo? (
          stateManagementService.state.fichamentoAtivo.fichas.map((ficha, idx) => (
          
            <Suspense fallback={<div>LOADING ...</div>}>
                
              {(ficha.sessao.id === filtroDeSessao?.id || filtroDeSessao?.descricao === 'TODAS') && (
                 <Ficha key={ficha.id} ficha={ficha} idx={idx} />
              )}
            </Suspense>
            
          ))
        ) : (
          <Loading />
        )}
    </main>
  )
}

export default MainFichamento;