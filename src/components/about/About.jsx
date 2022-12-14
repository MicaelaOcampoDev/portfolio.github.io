import "./about.css";
import Award from "../../img/award.png";
import aboutme from "../../img/aboutme.png";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                <img src={aboutme} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">Acerca de mi </h1>
                <p className="a-sub"> 👩🏽‍💻Estudiante de Licenciatura en Sistemas en UNGS. </p>
                <p className="a-desc">Actualmente tambien me encuentro cursando un Bootcamp de desarrollo web Full Stack, de la Fundacion Pescar con JP Morgan. Y entre los cursos que realizo diariamente, se encuentra el de Diseño de Experiencia del Usuario (UX) de Google.🤓
                    </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Otras de mis pasiones:</h4>
                        <p className="a-award-desc">Rescatar animales, el ecologismo y mi cable a tierra que es entrenar!</p>
                        
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;