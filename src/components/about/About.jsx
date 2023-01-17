import "./about.css";
import skills from "../../img/skills.png";
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
                <h1 className="a-title">SERVICIOS</h1>
                <p className="a-sub"> 👩🏽‍💻Estudiante de Licenciatura en Sistemas en UNGS. </p>
                <p className="a-desc">Actualmente tambien me encuentro cursando un Bootcamp de desarrollo web Full Stack, de la Fundacion Pescar asociada con JP Morgan. Y entre los cursos que realizo diariamente, se encuentra el de Diseño de Experiencia del Usuario (UX) de Google.🤓
                    </p>
                <div className="a-award">
                    <img src={skills} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">COMPETENCIAS TECNICAS</h4>
                        <p className="a-award-desc">Javascript / React Js / HTML5 / CSS3 / SASS / Bootstrap / Diseño UX / Mongo DB/ Node JS/GIT/ GitHub</p>
                        
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;