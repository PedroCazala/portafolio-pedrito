import MostrarHabilidades from "./MostrarHabilidades"
import {arraySkillsDev,arraySkillsDesing,arraySkillsArtistic,arraySkillsExtra} from './arrayHabilidades'

import './Habilidades.scss'
function Habilidades() {
    return (
        <div className="habilidades">
            <h1>Habilidades</h1>
            <h2>Desarrollo y programación</h2>
            <MostrarHabilidades skills={arraySkillsDev}/>
            <h2>Edición</h2>
            <MostrarHabilidades skills={arraySkillsDesing}/>
            <h2>Extra</h2>
            <MostrarHabilidades skills={arraySkillsArtistic}/>
            <h2>Artísticas</h2>
            <MostrarHabilidades skills={arraySkillsExtra}/>
        </div>
    )
}

export default Habilidades