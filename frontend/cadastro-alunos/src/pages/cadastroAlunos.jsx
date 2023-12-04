import React from 'react';
import FormCadastroAluno from '../components/cadastro/FormCadastroAluno';
FormCadastroAluno
import { toast, ToastContainer } from 'react-toastify';

function CadastroAlunos(props) {
    return (
        <main className='flex-1 lg:ml-72  '>

           

            <h1 className='text-center bg-zinc-200 border-2 border-black p-1.5'>Cadastro de aluno </h1>

            <FormCadastroAluno 
            
            />

            

        </main>
    );
}

export default CadastroAlunos;