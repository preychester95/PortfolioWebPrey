import React from 'react'

class Tools extends React.Component{
    render(){
        return(
            <div className="Tools container">
                <div class="row">
                    <div class="col-md-3 col-xs-12">
                        <ul>
                        <h4>Lenguajes</h4>
                            <li>Java Android</li>
                            <li>Java Web</li>
                            <li>HTML, Javascript, SASS</li>
                            <li>React</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-xs-12">
                        <ul>
                        <h4>Base de datos</h4>
                            <li>MySQL</li>
                            <li>SQL Server</li>
                            <li>Mongo DB</li>
                            <li>SQLite</li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-xs-12">
                        <ul>
                        <h4>IDEs</h4>
                            <li>Android Studio</li>
                            <li>IntelliJ</li>
                            <li>Visual Studio Code</li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-xs-12">
                        <ul>
                        <h4>Herramientas</h4>
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