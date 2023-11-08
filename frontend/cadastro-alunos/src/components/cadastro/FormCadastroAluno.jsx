import React, { useContext } from 'react';
import { AlunoContext } from '../../contexts/AlunoContext';
import useSubmitAluno from '../../hooks/useSubmitAluno'


function FormCadastroAluno(props) {

    const {nomeAluno, emailAluno, raAluno, cpfAluno} = useContext(AlunoContext);

    const {mutation} = useSubmitAluno();


    return (
        <section className='w-full h-full flex flex-col py-32 gap-6 justify-center items-center'>

            <div className='flex items-center w-8/12'>
                <label className='bg-zinc-200 py-2 w-60 px-6 rounded'>Nome</label>
                <input ref={nomeAluno} type="text" className=' w-full border rounded py-2 px-2' placeholder='Informe o nome completo:'/>
            </div>

            <div className='flex items-center w-8/12'>
                <label className='bg-zinc-200 py-2 w-60 px-6 rounded'>Email</label>
                <input ref={emailAluno} type="email" className=' w-full border rounded py-2 px-2' placeholder='Informe apenas um e-mail:'/>
            </div>

            <div className='flex items-center w-8/12'>
                <label className='bg-zinc-200 py-2 w-60 px-6 rounded'>RA</label>
                <input ref={raAluno} type="number" className=' w-full border rounded py-2 px-2' placeholder='Informe o registro acadêmico:'/>
            </div>

            <div className='flex items-center w-8/12'>
                <label className='bg-zinc-200 py-2 w-60 px-6 rounded'>CPF</label>
                <input ref={cpfAluno} type="number" className=' w-full border rounded py-2 px-2' placeholder='Informe o número de documento:'/>
            </div>


            <div className='flex items-center gap-10 justify-items-end'>
                <button  className='py-2.5 px-3.5 bg-zinc-200 rounded'>Cancelar</button>
                <button onClick={()=>mutation.mutate()} className='py-2.5 px-3.5 bg-zinc-300 rounded'>Salvar</button>
            </div>



        </section>
    );
}

export default FormCadastroAluno;