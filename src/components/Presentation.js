import React from 'react';
import profilePic from '../resources/1517600382529.jpg'
class Presentation extends React.Component {
    render() {
        return (
            <div className="Presentation">
                <div class="container presentationContent">
                    <img src={profilePic} alt="Imagen de perfil Pablo Rey"/>
                    <h2>¿Quién soy?</h2>
                    <p>
                        Me llamo Pablo Rey Campo, nací el 3 de Noviembre de 1995 y me apasiona la tecnología. Desde pequeño ya tenía claro que quería trabajar en algo relacionado con los ordenadores, por lo que cuando terminé el instituto en 2013, comencé a estudiar la carrera de Ingeniería Informática en la UPNA. 
                        En el año 2017 y tras realizar el periodo de Erasmus en Finlandia, terminé la carrera y comencé mi aventura en el mundo laboral. Ese mismo año en paralelo al trabajo y para seguir creciendo, comencé los estudios del Máster en Ingeniería Informática en la misma universidad. Finalicé estos estudios en el año 2020.
                        <br></br>
                        <br></br>
                        Me considero una persona trabajadora, con muchas ganas de aprender cosas nuevas que siempre está tratando de mejorar como profesional en el sector. Estoy abierto a cualquier reto tecnológico que se presente y me encanta trabajar en equipo.
                        Además de la informática, me encanta el CrossFit, la que considero mi segunda gran pasión a día de hoy.
                    </p>
                </div>
            </div>
        );
    }
}

export default Presentation;