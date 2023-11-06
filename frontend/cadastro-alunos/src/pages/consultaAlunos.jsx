import React from 'react';
import SectionPesquisaCadastro from '../components/consulta/SectionPesquisaCadastro';
import TabelaAlunos from '../components/consulta/TabelaAlunos';

function consultaAlunos(props) {
    return (
       <main className='flex-1 ml-72 '>
            <h1 className='text-center bg-zinc-200 border-2 border-black p-1.5'>Consulta Alunos</h1>


            <SectionPesquisaCadastro 
            
            
            />



            <TabelaAlunos
             />

       </main>
    );
}

export default consultaAlunos;