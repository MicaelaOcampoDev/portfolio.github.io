import "./contact.css";
import Whatsapp from "../../img/whatsapp.png";
import Email from "../../img/email.png";
import Linkedin from "../../img/linkedin.png";
import Address from "../../img/address.png";
import { useContext, useRef , useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef()
    const [done , setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_hymeehj', 'template_zgr2vts', formRef.current, '_8El3hKimHxq6qXK3')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

    }
    return (
        <div className="c">
            <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Podes contactarme a traves de:</h1>
                        <div className="c-info">
                        <div className="c-info-item">
                                <img src={Linkedin} alt="" className="c-icon" />
                                https://www.linkedin.com/in/micaela-ocampodev/
                            </div>
                            <div className="c-info-item">
                                <img src={Email} alt="" className="c-icon" />
                                micaocampo.dev@gmail.com
                            </div>
                            <div className="c-info-item">
                                <img src={Whatsapp} alt="" className="c-icon" />
                                +549 11-24601561
                            </div>
                            <div className="c-info-item">
                                <img src={Address} alt="" className="c-icon" />
                                Buenos Aires, Arg
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>Tambien podes dejarme un mensaje!</b> Te respondere a la brevedad.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder="Nombre:" name="user_name"/>
                            <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder="Asunto:" name="user_subject"/>
                            <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder="Email:" name="user_email"/>
                            <textarea style={{backgroundColor: darkMode && "#333" }} rows="5" placeholder="Mensaje:" name="message"/>
                            <button>Enviar</button>
                            {done && "Gracias por tu mensaje!"}
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default Contact;