import React, {useState} from 'react';
import './index.scss';

import axios from "axios";

import PlayerCard from "./components/PlayerCard";
import CustomCSS from "./components/CustomCSS";

class App extends React.Component {
      state = {
        data: [],
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
        <div className="container">
          <CustomCSS />
          <h1>Famous Players</h1>
          <section className="playerCardContainer">
          {/* {this.state.data.map( player => {
            return <PlayerCard
              name = {player.name}
              country={player.country}
              searches={player.searches}

             />
          })} */}

          {<PlayerCard dataSet={this.state.data} />}
          </section>
        </div>
      );
    }
}


export default App;
