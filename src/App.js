import React, { Component } from 'react';
import SearchName from './components/SearchName/SearchName'
import SearchPlanet from './components/SearchPlanet/SearchPlanet'
import Results from './components/Results/Results'
import './App.css';
import PlanetResults from './components/PlanetResults/PlanetResults';

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
    console.log(planet)
    this.setState({
      planets: planet
    })
  }

  render(){
  return (
    <div className="App">
      <header>STAR WARS</header>
      <SearchName name={this.handleNameRequest}/>
      <SearchPlanet planet={this.handlePlanetRequest}/>
      <Results names={this.state.characters}/>
      <PlanetResults planets={this.state.planets}/>
    </div>
  );
}
}

export default App;
