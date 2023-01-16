import './intro.css';
import introportfolio from "../../img/introportfolio.png";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Bienvenidos, mi nombre es</h2>
                    <h2 className='i-name'>Micaela Ocampo</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>                        
                        </div>
                    </div>
                    <p className="i-desc">
                    🙌🏼Soy desarrolladora web FullStack. Me apasiona el conocimiento y estar en constante aprendizaje. Tengo la intención de poder dedicarme plenamente a la programacion en el futuro.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={introportfolio} alt="" className="i-img" />
            </div>
        </div>

    );
}

export default Intro;