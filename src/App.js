import React, { Component } from 'react';
import Search from './components/Search/Search'
import Display from './components/Results/Results'
import './App.css';

class App extends Component {
  state = {
    results: [],
  }

  handleNameRequest = name => {
    this.setState({
      results: name,
    })
  
  }

  render(){
  return (
    <div className="App">
      <header>STAR WARS</header>
      <Search name={this.handleNameRequest}/>
      <Display names={this.state.results}/>
    </div>
  );
}
}

export default App;
