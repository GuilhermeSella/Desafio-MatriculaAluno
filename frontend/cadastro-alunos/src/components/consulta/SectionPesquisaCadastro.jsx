import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlunoContext } from '../../contexts/AlunoContext';
import useSearchAluno from '../../hooks/useSearchAluno';


function SectionPesquisaCadastro(props) {

    const {nomeAlunoSearch} = useContext(AlunoContext)
    
    const mutation = useSearchAluno();

    return (
        <section className='flex flex-wrap-reverse gap-5 w-full justify-evenly items-center py-40 px-10 h-60 '>

            <div className='flex items-center justify-center w-96'>

                <div>
                    <input className='border py-2 w-full px-3' type="text" placeholder='Digite sua busca' ref={nomeAlunoSearch}/>
                </div>
                
                
                <button className='bg-zinc-200 p-2.5 rounded-br-sm font-semibold' onClick={()=>mutation.mutate()}>Pesquisar</button>

            </div>

           <div>
            <Link to="/cadastroAlunos" className='bg-gray-400 p-2 font-semibold rounded text-white'>
                    Cadastrar Aluno
                </Link >
           </div>


        </section>
    );
}

export default SectionPesquisaCadastro;