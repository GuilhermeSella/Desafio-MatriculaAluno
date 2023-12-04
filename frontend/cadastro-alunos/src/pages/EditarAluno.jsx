import React from 'react';
import FormEditAluno from '../components/edicaoAluno/FormEditAluno';

function EditarAluno(props) {
    return (
        <main className='flex-1 lg:ml-72 '>
            <h1 className='text-center bg-zinc-200 border-2 border-black p-1.5'>Atualizar aluno </h1>

            <FormEditAluno />

        </main>
    );
}

export default EditarAluno;