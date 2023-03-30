import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ISkill } from "../../../interfaces/skill.interface";
interface Props {
    skills: ISkill[];
    setearSkill:(id:number)=>void
}
function MySlider({ skills,setearSkill}: Props) {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    speed: 5000,

                },
            }
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //     },
            // },
        ],
    };

    return (
        <>
            <Slider {...settings}>
                {skills.map((skill) => {
                    return (
                        <div className="containerImg" key={skill.id} onClick={()=>setearSkill(skill.id)}>
                            <img src={skill.logo} alt={skill.name} />
                        </div>
                    );
                })}
            </Slider>
        </>
    );
}

export default MySlider;
