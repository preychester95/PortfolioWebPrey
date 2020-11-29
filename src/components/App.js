import Presentation from './Presentation'
import Projects from './Projects'
import Footer from './Footer'
import React from 'react';
import '../styles/styles.scss'

class App extends React.Component{
  render(){
    return(
      <div className="App">
          <Presentation/>
          <Projects/>
          <Footer/>
      </div>
    );
  }
}

export default App;
