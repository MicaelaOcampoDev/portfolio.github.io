import './intro.css';
import introportfolio from "../../img/introportfolio.png";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>ALOJAMIENTOS PARA ANIMALES</h2>
                    <h2 className='i-name'>A TU ALCANCE</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Guarderias caninas</div>
                            <div className="i-title-item">Guarderias felinas</div>
                            <div className="i-title-item">Cuidadores a domicilio</div>
                            <div className="i-title-item">Adopciones</div>
                            <div className="i-title-item">Publicidad</div>                        
                        </div>
                    </div>
                    <p className="i-desc">
                    🐶Somos una empresa que se dedica a facilitarte el cuidado de tu amiguito de cuatro patas!
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