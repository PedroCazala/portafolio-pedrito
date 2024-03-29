// import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
interface Props {
    imgs: string[];
    nameOfProyect:string;
}
function ImgCarrousel({ imgs, nameOfProyect}: Props) {
    return (
        <Carousel fade>
            {imgs.map((img) => (
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            src={img}
                            alt={nameOfProyect}
                        />
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ImgCarrousel;
// function ImgCarrousel() {
//     const [index, setIndex] = useState(0);

//     const handleSelect = (selectedIndex, e) => {
//         setIndex(selectedIndex);
//     };

//     return (
//         <Carousel activeIndex={index} onSelect={handleSelect}>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
//                     alt="First slide"
//                 />
//                 <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>
//                         Nulla vitae elit libero, a pharetra augue mollis
//                         interdum.
//                     </p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Second slide&bg=282c34"
//                     alt="Second slide"
//                 />

//                 <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     </p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Third slide&bg=20232a"
//                     alt="Third slide"
//                 />

//                 <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>
//                         Praesent commodo cursus magna, vel scelerisque nisl
//                         consectetur.
//                     </p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//     );
// }

// export default ImgCarrousel
