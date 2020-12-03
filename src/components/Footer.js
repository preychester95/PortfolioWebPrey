import React from 'react'
import linkedinLogo from '../resources/linkedin-3-xl.png'
import githubLogo from '../resources/github-11-32.png'
import mailLogo from '../resources/mail-32.png'
import phoneLogo from '../resources/phone-32.png'

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <footer class="footerContent">
                    <h3>Contacto</h3>
                    <div class="container">
                        <ul>
                            <div class="row">
                                <li class="col-md-3 col-xs-12">
                                    <a href="https://www.linkedin.com/in/pablo-rey-campo-ba459213a/">
                                        <img src={linkedinLogo} alt="Linkedin Pablo Rey" />
                                Linkedin
                            </a>
                                </li>
                                <li class="col-md-3 col-xs-12">
                                    <a href="https://github.com/preychester95">
                                        <img src={githubLogo} alt="GitHub Pablo Rey" />
                                Github
                            </a>
                                </li>
                                <li class="col-md-3 col-xs-12">
                                    <img src={phoneLogo} alt="Teléfono Pablo Rey" />
                            680704852
                        </li>
                                <li class="col-md-3 col-xs-12">
                                    <img src={mailLogo} alt="Correo Pablo Rey" />
                            b2atic.preyc@gmail.com
                        </li>

                            </div>
                        </ul>
                    </div>
                    <div class="copyright">
                        © PREY - 2020.
					</div>
                </footer>
            </div>
        );
    }
}

export default Footer;