import { useParams } from "react-router-dom";
import projects from '../data/projects.json';
import ProjectContainer from "../components/ProjectContainer";
import airbnbImage from '../assets/images/airbnbclone.png'
import femmersive from '../assets/images/F-EMMERSIVE.png'
import previewAirbnbImage from '../assets/images/previewAirbnb.png';
import previewFEmmersiveImage from '../assets/images/previewFE.png';
import programsAirbnb from '../assets/images/programAIRBNB.png'
import programsFE from '../assets/images/programFE.png'


const imageMap = {
    "airbnb-clone": airbnbImage,
    "formula-emmersive": femmersive,
}


const previewMap = {
    "airbnb-clone": previewAirbnbImage,
    "formula-emmersive": previewFEmmersiveImage,
};

const programMap = {
    "airbnb-clone": programsAirbnb,
    "formula-emmersive": programsFE,
}

export default function ProjectPage() {
    const { id } = useParams();
    const project = projects.find(proj => proj.id === id);

  return (
    <div className="h-[100%]">
      {project ? (
        <>
        <ProjectContainer titulo={project.titulo} descricao={project.descricao} programs={programMap[project.id]} preview={previewMap[project.id]}/>
        </>
      ) : (
        <p>Projeto não encontrado</p>
      )}
    </div>
  );
}
