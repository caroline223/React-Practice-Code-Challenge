import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    renderedSushis: [],
    startIndex: 0,
    balance: 100
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(this.setInitialSushis)
  }

  setInitialSushis = (sushiCollection) => {
    const newSushis = sushiCollection.map(sushi => {
      return {
        ...sushi, eaten:false
      }
    })
    this.setState({
      renderedSushis: newSushis
    })
  }

  handleMoreSushi = (event) => {
    this.setState({
      startIndex: this.state.startIndex+4
    })
  }

  sushiDisplay = () => {
    return this.state.renderedSushis.slice(this.state.startIndex, this.state.startIndex+4)
  }

  eatSushi = (sushiObject) => {
    const eatenSushis = this.state.renderedSushis.map(sushi => {
      if(sushi.id === sushiObject.id && this.state.balance > sushiObject.price){
       sushi.eaten = true
        this.setState({balance: this.state.balance - sushiObject.price})
        return sushi
      }
      else {
        return sushi 
      }
    })
    this.setState({renderedSushis: eatenSushis})
   
  }

  
  

  render() {
    return (
      <div className="app">
        <SushiContainer handleMoreSushi={this.handleMoreSushi} sushis={this.sushiDisplay()} />
        <Table balance={this.state.balance} eatSushi={this.eatSushi} />
      </div>
    );
  }
}

export default App;