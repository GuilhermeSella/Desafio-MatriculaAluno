import React from 'react';
import { Link } from 'react-router-dom';

function SectionPesquisaCadastro(props) {
    return (
        <section className='flex w-full justify-evenly items-center py-40 h-60 '>


            <div className='flex items-center w-96'>
                <input className='border py-2 w-full px-3' type="text" placeholder='Digite sua busca' />
                <button className='bg-zinc-200 p-2.5 rounded-br-sm font-semibold '>Pesquisar</button>
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