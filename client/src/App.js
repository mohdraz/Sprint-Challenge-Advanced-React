import React from 'react';
import './index.scss';

import axios from "axios";

import PlayerCard from "./components/PlayerCard";

class App extends React.Component {
    constructor(){
      super();
      this.state = {
        data: [],
      }
      
    }

    componentDidMount() {
      axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log("this is the data received: ", res.data)
        this.setState({
          data: res.data
        });
      })
      .catch(err => console.log(err));

    }
    

    render() {
      return (
        <div class="container">
          <h1>Famous Players</h1>
          <section class="playerCardContainer">
          {this.state.data.map( player => {
            return <PlayerCard
              name = {player.name}
              country={player.country}
              searches={player.searches}

             />
          })}
          </section>
        </div>
      );
    }
}


export default App;
