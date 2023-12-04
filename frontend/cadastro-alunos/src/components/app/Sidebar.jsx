import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar(props) {
    return (
        <nav className='w-72 fixed hidden h-screen bg-zinc-100 border border-2 border-black lg:block'>

            <div className='py-3 bg-zinc-400'>
                <h1 className='text-white font-semibold text-center'>Módulo Acadêmico</h1>
            </div>

            <div className='py-1.5 px-5 bg-zinc-300'>
                <Link to="/consultaAlunos" className='w-full'>Alunos</Link>
            </div>

        </nav>
    );
}

export default Sidebar;