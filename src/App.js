import React, { Component } from 'react';
import Search from './components/Search/Search'
import Results from './components/Results/Results'
import './App.css';

class App extends Component {
  state = {
    characters: [],
    planets: [],
  }

  handleNameRequest = name => {
    this.setState({
      characters: name,
    })
  
  }
  handlePlanetRequest = planet =>{
    this.setState({
      planets: planet
    })
  }

  render(){
  return (
    <div className="App">
      <header>STAR WARS</header>
      <Search name={this.handleNameRequest} planet={this.handlePlanetRequest}/>
      <Results names={this.state.characters} planets={this.state.planets}/>
    </div>
  );
}
}

export default App;
