import React from 'react'

class Tools extends React.Component {
    render() {
        return (
            <div className="Tools container">
                <div class="row">
                    <div class="col-md-3 col-xs-12">
                        <ul>
                            <h6><u>Lenguajes</u></h6>
                            <li>Java Android</li>
                            <li>Java Web</li>
                            <li>HTML, Javascript, SASS</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-xs-12">
                        <ul>
                            <h6><u>Base de datos</u></h6>
                            <li>MySQL</li>
                            <li>SQL Server</li>
                            <li>Mongo DB</li>
                            <li>SQLite</li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-xs-12">
                        <ul>
                            <h6><u>Patrones y Arquitecturas</u></h6>
                            <li>Arquitectura hexagonal</li>
                            <li>DDD</li>
                            <li>MVP</li>
                            <li>MVC</li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-xs-12">
                        <ul>
                            <h6><u>Herramientas</u></h6>
                            <li>Liferay</li>
                            <li>REST API</li>
                            <li>Apache</li>
                            <li>JBoss</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tools;