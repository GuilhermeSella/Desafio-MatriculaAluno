import React, { useState } from 'react';
import SectionPesquisaCadastro from '../components/consulta/SectionPesquisaCadastro';
import TabelaAlunos from '../components/consulta/TabelaAlunos';
import ModalDelete from '../components/consulta/ModalDelete';

function consultaAlunos(props) {

    const [ isOpen, setIsOpen] = useState()
    

    return (
       <main className='flex-1 ml-72 '>
            <h1 className='text-center bg-zinc-200 border-2 border-black p-1.5'>Consulta Alunos</h1>


            <SectionPesquisaCadastro 
            
            
            />



            <TabelaAlunos

                setIsOpen={setIsOpen}

             />

            { isOpen ? <ModalDelete  setIsOpen={setIsOpen} /> : <></>  }

             

       </main>
    );
}

export default consultaAlunos;