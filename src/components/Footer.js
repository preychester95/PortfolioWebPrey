import React from 'react'

class Footer extends React.Component{
    render(){
        return(
            <div className="Footer">
                <footer class="footerContent">
                    <h3>Contacto</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Linkedin</li>
                        <li>Teléfono</li>
                        <li>Mail</li>
                    </ul>
                    <div class="copyright">
						© PREY - 2020. 
					</div>
                </footer>
            </div>
        );
    }
}

export default Footer;