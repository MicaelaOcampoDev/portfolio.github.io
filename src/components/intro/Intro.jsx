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
                            <div className="i-title-item">UX Designer</div>                          
                        </div>
                    </div>
                    <p className="i-desc">
                    🙌🏼Me apasiona el conocimiento y estar en constante aprendizaje. Tengo la intención de poder dedicarme plenamente a la programacion en el futuro.
                    </p>
                </div>
                <img src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/000000/external-scroll-ui-and-ux-xnimrodx-lineal-xnimrodx-2.png" alt=" icono scroll " className='i-scroll' />
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={introportfolio} alt="" className="i-img" />
            </div>
        </div>

    );
}

export default Intro;