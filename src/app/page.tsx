'use client'
import { useEffect } from 'react';
import AsideFichamento from './components/asideFichamento/AsideFichamento';
import MainFichamento from './components/mainFichamento/MainFichamento';
import { SharedStateProvider } from './shared/context/SharedStateContext';
import MainContainer from './components/mainContainer/MainContainer';

export default function Home(props:any) {
  
 useEffect(() => {
  //console.log("props", props)
 },[])
  
  return (
   <>
   

    <div className="flex">
      <SharedStateProvider>
        <MainContainer  {...props} />
      </SharedStateProvider>
    </div>

   </>
  )
}
