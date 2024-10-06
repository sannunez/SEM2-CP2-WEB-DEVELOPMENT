import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import projetos from '../data/projects.json'

function MyProjects() {
    return (
        <>
            <div className="flex bg-slate-700 py-[150px]">
                <div>
                    <h1>Meus Projetos</h1>
                    <nav>
                        <ul>
                            {projetos.map(projeto => (
                                <li key={projeto.id}>
                                <Link to={`${projeto.id}`}>{projeto.titulo}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <Outlet />
            </div>
        </>
    );
}

export default MyProjects;