
import { useState } from "react";
import { ISkill } from "../../../interfaces/skill.interface";
import Carrusel from "./Carrusel";

interface Props {
    skills: ISkill[];
}
function MostrarHabilidades({ skills }: Props) {

    const [activeSkill, setActiveSkill] = useState<number | false | null>();

    const setearSkill = (id: number) => {
        setActiveSkill(id);
    };
    const closeSkill = () => {
        setActiveSkill(false);
    };
    const findedSkill = skills.find((skill) => skill.id === activeSkill);
    return (
        <div className="MostrarHabilidades">
            <div className="containerCarrusel">
                <Carrusel skills={skills} setearSkill={setearSkill}/>
            </div>
            <div
                className={` ${
                    activeSkill ? activeSkill : "false"
                }`}
            >
                <div className="alert alert-dismissible alert-primary description">
                    <button
                        type="button"
                        className="btn-close"
                        onClick={()=>closeSkill()}
                        // data-bs-dismiss="alert"
                        ></button>
                    <img src={findedSkill?.logo} alt={findedSkill?.name} className='logo' />
                    <h4 className="alert-heading">
                        {findedSkill?.name}
                    </h4>
                    <p className="mb-0 text">
                        {findedSkill?.description}
                    </p>
                </div>
            </div>
        </div>
    );
    // const habilidades = skills.map((skill: ISkill) => {
    // });
    // return <div>{habilidades}</div>;
}

export default MostrarHabilidades;
