'use client'
import Button from '@/app/components/layoutComponents/button/button';
import { TypeButton } from '@/app/shared/models/typeButtons';
import React from 'react';
import Container from '../../components/container/container';
import { useRouter } from 'next/navigation';

// import { Container } from './styles';

const Carregar: React.FC = () => {

  const router = useRouter();
  const hasbook = false;

  function carregar(){
    router.push('/');
  }

  function goHome(){
    router.push('/');
  }

  function goToNovoFichamento(){
    router.push('/pages/novo');
  }

  function cancelar(){
    void(0)
  }
  return (
    <>
      <Container>
        {hasbook? (
          <div id="hasbook">
          <h2 className="text-base font-semibold leading-7 text-indigo-500 mb-8">Selecione um livro</h2>
          <div className='bg-white shadow-lg rounded-lg overflow-hidden p-4'>
            <details id="dados-livro" className="">
              <summary className="text-indigo-600 font-semibold cursor-pointer">Senhor dos anéis</summary>
              <div className="grid grid-cols-3">
                <div className="">
                  <h3 className="text-sm font-semibold text-indigo-500">livro</h3>
                  <p className="text-sm text-gray-600">Senhor dos anéis</p>
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-semibold text-indigo-500">data publicação</h3>
                  <p className="text-gray-600 text-sm">1982</p>
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-semibold text-indigo-500">Editora</h3>
                  <p className="text-gray-600 text-sm">cia das letras</p>
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-semibold text-indigo-500">Autor</h3>
                  <p className="text-gray-600 text-sm">João Ubaldo</p>
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-semibold text-indigo-500">gênero</h3>
                  <p className="text-gray-600 text-sm">Literatura universal</p>
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-semibold text-indigo-500">palavra-chave</h3>
                  <p className="text-gray-600 text-sm">literatura brasileira</p>
                </div>

                <div className='mt-8 mb-4'>
                  <Button label="carregar" type={TypeButton.primary} action={carregar}/>
                </div>
              </div>
            </details>

          </div>
        </div>
        ) :
        (
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-500 mb-8">Não há nenhum fichamento para ser carregado. Oque deseja fazer?</h2>
            <div className="flex gap-4">
            <Button label="home" type={TypeButton.secundary} action={goHome}/>
            <Button label="Criar fichamento" type={TypeButton.primary} action={goToNovoFichamento}/>

            </div>
            
          </div>
        )
        }
        
      </Container>
    </>
  )
}

export default Carregar;