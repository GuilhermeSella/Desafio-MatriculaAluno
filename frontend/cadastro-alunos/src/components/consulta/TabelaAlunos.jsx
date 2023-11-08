import React from 'react';
import useGetAlunos from '../../hooks/useGetAlunos';

function TabelaAlunos(props) {

    // const {data, error} = useGetAlunos()
    // console.log(data)

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

                        <tr>
                            <td className='py-4'>11000 </td>
                            <td>Malcolm Lockyer</td>
                            <td>19634534634671</td>
                            <td>[Editar] [Excluir]</td>
                        </tr>
                        <tr>
                            <td className='py-4'>11000 </td>
                            <td>Malcolm Lockyer</td>
                            <td>19634534634671</td>
                            <td>[Editar] [Excluir]</td>
                        </tr>
                        <tr>
                            <td className='py-4'>11000 </td>
                            <td>Malcolm Lockyer</td>
                            <td>19634534634671</td>
                            <td>[Editar] [Excluir]</td>
                        </tr>
                        <tr>
                            <td className='py-4'>11000 </td>
                            <td>Malcolm Lockyer</td>
                            <td>19634534634671</td>
                            <td>[Editar] [Excluir]</td>
                        </tr>
                        <tr>
                            <td className='py-4'>11000 </td>
                            <td>Malcolm Lockyer</td>
                            <td>19634534634671</td>
                            <td>[Editar] [Excluir]</td>
                        </tr>
                        <tr>
                            <td className='py-4'>11000 </td>
                            <td>Malcolm Lockyer</td>
                            <td>19634534634671</td>
                            <td>[Editar] [Excluir]</td>
                        </tr>

                        <tr>
                            <td className='py-4'>11000 </td>
                            <td>Malcolm Lockyer</td>
                            <td>19634534634671</td>
                            <td>[Editar] [Excluir]</td>
                        </tr>

                       

                    </tbody>
                </table>
        </section>
    );
}

export default TabelaAlunos;