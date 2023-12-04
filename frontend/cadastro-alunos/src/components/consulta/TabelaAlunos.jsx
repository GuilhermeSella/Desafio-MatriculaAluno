import React, { useContext, useState } from 'react';
import useGetAlunos from '../../hooks/useGetAlunos';
import { Link } from 'react-router-dom';
import { AlunoContext } from '../../contexts/AlunoContext';
import ModalDelete from './ModalDelete';

function TabelaAlunos({prop}) {

    const {dataTable, setDataTable} = useContext(AlunoContext)
    const {data, error, isLoading} = useGetAlunos()
    
    const [ isOpen, setIsOpen] = useState(false)

    const [raAlunoToDelete, setRaAlunoToDelete] = useState()

    if(isLoading){
        return (
            <h1>Carregando Alunos</h1>
        )
    }

    return (
        <section >
                <table className="w-full ">
                    <thead className='bg-zinc-300 '>
                        <tr>
                            <th className='py-4'>RA</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody className='text-center bg-zinc-100 '>

                        { dataTable.length == 0 ?  data.data.alunos.map(aluno => (
                            <tr key={aluno.RA}>

                                <td className='py-4'>{aluno.RA} </td>

                                <td>{aluno.nome}</td>

                                <td>{aluno.CPF}</td>

                                <td>
                                    <Link to={`/editarAluno/${aluno.RA}`}>[Editar]</Link>
                                    <button onClick={()=>{
                                        setRaAlunoToDelete(aluno.RA)
                                        setIsOpen(true)
                                    }}>[Excluir]</button>
                                </td>

                            </tr>
                            
                        )) :  dataTable.alunos.map(aluno => (
                            <tr key={aluno.RA}>

                                <td className='py-4'>{aluno.RA} </td>

                                <td>{aluno.nome}</td>

                                <td>{aluno.CPF}</td>

                                <td>
                                    <Link to={`/editarAluno/${aluno.RA}`}>[Editar]</Link>
                                    <button onClick={()=>{
                                        setRaAlunoToDelete(aluno.RA)
                                        setIsOpen(true)
                                    }}>[Excluir]</button>
                                </td>
                                
                            </tr>
                        ))}
                        
                    </tbody>
                </table>

                { isOpen ? <ModalDelete setIsOpen={setIsOpen} raAluno={raAlunoToDelete} /> : <></>  }

        </section>
    );
}

export default TabelaAlunos;