'use client'
import { TypeButton } from '@/app/shared/models/typeButtons';
import React from 'react';

// import { Container } from './styles';

interface ButtonProps{
    label:string
    type:TypeButton
    action?:()=>void
}

const Button = (props:ButtonProps) => {
    
    function retrieveTypeButton(){
        switch(props.type){
            case 'primary':
                return ' bg-indigo-500 hover:bg-indigo-600 text-white rounded'
            case 'secundary':
                return 'border-2 border-indigo-400 text-indigo-400 rounded hover:border-indigo-600 hover:text-indigo-600'
            case 'action':
                return ' bg-green-500 hover:bg-green-600 text-white rounded'
            case 'inline':
                return 'text-indigo-500 hover:text-indigo-800 font-semibold'
            case 'inlineAnotacao':
                return 'text-lime-500 hover:text-lime-700 font-semibold'
            default:
                return ''
        }
    }

  return(
    <>
            <button
                className={`${retrieveTypeButton()} px-4 py-2 rounded focus:outline-none`}
                onClick={props.action}
            >
                {props.label}
            </button>
    </>
  )
}

export default Button;