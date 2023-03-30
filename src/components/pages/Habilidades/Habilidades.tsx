import MostrarHabilidades from "./MostrarHabilidades";
import {
    arraySkillsDev,
    arraySkillsDesing,
    arraySkillsArtistic,
    arraySkillsExtra,
} from "./arrayHabilidades";

import "./Habilidades.scss";
function Habilidades() {
    const filterCategory = (category:string) =>{
        return arraySkillsDev.filter(skill =>skill?.category?.includes(category))
    }
    return (
        <div className="habilidades">
            <h1>Habilidades</h1>
            <h2>Frontend</h2>
            <MostrarHabilidades skills={filterCategory('frontend')} />
            <h2>Backend</h2>
            <MostrarHabilidades skills={filterCategory('backend')} />
            <h2>FullStack</h2>
            <MostrarHabilidades skills={filterCategory('fullstack')} />
            <h2>Edición</h2>
            <MostrarHabilidades skills={arraySkillsDesing} />
            <h2>Extra</h2>
            <MostrarHabilidades skills={arraySkillsExtra} />
            <h2>Artísticas</h2>
            <MostrarHabilidades skills={arraySkillsArtistic} />
        </div>
    );
}

export default Habilidades;
