import React from 'react'
import Presentation from './Presentation'
import Projects from './Projects'
import Tools from './Tools'
import Footer from './Footer'
import '../styles/styles.scss'

class App extends React.Component{
  render(){
    return(
      <div className="App">
          <Presentation/>
          <Projects/>
          <Tools/>
          <Footer/>
      </div>
    );
  }
}

export default App;
