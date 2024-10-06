import {useParams } from "react-router-dom"
import projects from '../data/projects.json'

const { id } = useParams();
const project = projects.find(proj => proj.id === (id));

export default function projectContainer({titulo, descricao}) {
    return ( 
        <>
            <h1>{titulo}</h1>
            <p>{descricao}</p>
        </>
     );
}

