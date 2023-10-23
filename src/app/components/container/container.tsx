import React from 'react';

 import s from './container.module.css';
import Loading from '@/app/loading';

const Container = ({children}:any) => {
  return( 
    <>
    
    <div className={`${s.mainContainer} w-screen bg-gray-200 p-8`}>
        {children}
    </div>
    </>
  )
}

export default Container;