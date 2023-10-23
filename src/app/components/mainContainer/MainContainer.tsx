import React, { Suspense, useEffect } from 'react';
import AsideFichamento from '../asideFichamento/AsideFichamento';
import MainFichamento from '../mainFichamento/MainFichamento';
import Loading from '@/app/loading';
import { useSharedState } from '@/app/shared/context/SharedStateContext';
import ModalAdicionarSessao from '../modal/adicionarSessao/modalAdicionarSessao';

// import { Container } from './styles';

const mainContainer: React.FC = (props) => {

  const { stateManagementService } = useSharedState();
  useEffect(() => {
    console.log("MAINCOMPONENT", stateManagementService.State)
  }, [stateManagementService.State])

  return (
    <>  
        {/* <ModalAdicionarSessao /> */}
        <AsideFichamento {...props}/>
        <Suspense fallback={<div>LOADING ...</div>}>
           <MainFichamento {...props} />
        </Suspense>
    </>
  )
}

export default mainContainer;