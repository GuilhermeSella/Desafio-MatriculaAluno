import React, { useContext, useState } from 'react';
import { AlunoContext } from '../../contexts/AlunoContext';
import { Link, useParams } from 'react-router-dom';
import useUpdateAluno from '../../hooks/useUpdateAluno';
import useGetDataAluno from '../../hooks/useGetDataAluno';


function FormEditAluno(props) {

    
    const {nomeAluno, emailAluno} = useContext(AlunoContext);
    
    const {ra} = useParams();
    const {nome, email, cpf, setEmail, setNome} = useGetDataAluno(ra);
    
    const mutation = useUpdateAluno(nome, email);

    return (
        <section className='w-full h-full flex flex-col py-32 gap-6 justify-center items-center'>

            <div className='flex items-center w-8/12'>
                <label className='bg-zinc-200 py-2 w-60 px-6 rounded'>Nome</label>
                <input ref={nomeAluno} value={nome} onChange={(e)=>setNome(e.target.value)}  type="text" className=' w-full border rounded py-2 px-2' placeholder='Informe o nome completo:'/>
            </div>

            <div className='flex items-center w-8/12'>
                <label className='bg-zinc-200 py-2 w-60 px-6 rounded'>Email</label>
                <input ref={emailAluno} value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className=' w-full border rounded py-2 px-2' placeholder='Informe apenas um e-mail:'/>
            </div>

            <div className='flex items-center w-8/12'>
                <label className='bg-zinc-200 py-2 w-60 px-6 rounded'>RA</label>
                <input value={ra} readOnly type="number" className=' w-full border rounded py-2 px-2' placeholder='Informe o registro acadêmico:'/>
            </div>

            <div className='flex items-center w-8/12'>
                <label className='bg-zinc-200 py-2 w-60 px-6 rounded'>CPF</label>
                <input value={cpf} readOnly type="number" className=' w-full border rounded py-2 px-2' placeholder='Informe o número de documento:'/>
            </div>


            <div className='flex items-center gap-10 justify-items-end'>
                <Link to={"/consultaAlunos"} className='py-2.5 px-3.5 bg-zinc-200 rounded'>Cancelar</Link>
                <button onClick={()=>mutation.mutate()} className='py-2.5 px-3.5 bg-zinc-300 rounded'>Salvar</button>
            </div>



        </section>
    );
}

export default FormEditAluno;