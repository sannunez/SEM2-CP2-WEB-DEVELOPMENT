import { Link, useParams } from "react-router-dom";
import projects from '../data/projects.json';

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(proj => proj.id === id);

  return (
    <div className="py-[120px]">
      {project ? (
        <>
          <h1>{project.titulo}</h1>
          <p>{project.descricao}</p>
        </>
      ) : (
        <p>Projeto não encontrado</p>
      )}
    </div>
  );
}