import React from 'react'
import Card from './Card'

class Projects extends React.Component {

    getForestalesTitle() {
        return 'Guarderío Forestal';
    }

    getForestalesDate() {
        return 'Julio 2017-Febrero 2018';
    }

    getForestalesContent() {
        return 'Herramienta para la gestión de incidencias del guarderio forestal del gobierno de navarra. La herramienta consta de un backend desarrollado con Java, JSF + Primefaces e Hibernate y de una aplicación Android nativa desarrollada en Java Android';
    }

    getBusTitle() {
        return 'Gestión de equipajes';
    }

    getBusDate() {
        return 'Febrero 2018-Noviembre 2018';
    }

    getBusContent() {
        return 'Aplicación Android nativa para la gestión de equipajes para una empresa de transportes. La aplicación permite imprimir en una impresora de calor códigos QR con los identificadores del equipaje';
    }

    getDocsTitle() {
        return 'Mobile Docs';
    }

    getDocsDate() {
        return 'Noviembre 2018-Julio 2019';
    }
    getDocsContent() {
        return 'Aplicación para la visualización de documentación de ascensores, escaleras mecánicas para una importante empresa de ascensores. La aplicación se trata de un desarrollo nativo utilizando la librería Android Annotations y una base de datos local para funcionalidad offline';
    }

    getNavarraTitle() {
        return 'Navarra.es';
    }

    getNavarraDate() {
        return 'Julio 2019-Enero 2020';
    }

    getNavarraContent() {
        return 'Tareas de maquetación de diferentes componentes de la sección de altos cargos de Navarra.es. Como herramientas utilizadas: ftl, html, sass y jQuery';
    }

    getGNTitle() {
        return 'Gobierno de Navarra';
    }

    getGNDate() {
        return 'Abril 2020-Actualidad';
    }

    getGNContent() {
        return 'Tareas de gestión de proyectos para el gobierno de navarra. Interlocución con cliente, análisis funcional y gestión del portal Liferay';
    }


    render() {
        return (
            <div className="Projects">
                <div class="container projectsContent">
                    <h2>Proyectos en los que he trabajado</h2>
                    <ul>
                        <div class="row">
                            <li class="col-md-4 col-sm-12 col-xs-12">
                                <Card title={this.getGNTitle()}
                                    date={this.getGNDate()}
                                    content={this.getGNContent()} />
                            </li>
                            <li class="col-md-4 col-sm-12 col-xs-12">
                                <Card title={this.getNavarraTitle()}
                                    date={this.getNavarraDate()}
                                    content={this.getNavarraContent()} />
                            </li>
                            <li class="col-md-4 col-sm-12 col-xs-12">
                                <Card title={this.getDocsTitle()}
                                    date={this.getDocsDate()}
                                    content={this.getDocsContent()} />
                            </li>
                            <li class="col-md-4 col-sm-12 col-xs-12">
                                <Card title={this.getBusTitle()}
                                    date={this.getBusDate()}
                                    content={this.getBusContent()} />
                            </li>
                            <li class="col-md-4 col-sm-12 col-xs-12">
                                <Card title={this.getForestalesTitle()}
                                    date={this.getForestalesDate()}
                                    content={this.getForestalesContent()} />
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Projects
