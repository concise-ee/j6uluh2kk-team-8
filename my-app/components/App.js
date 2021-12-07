import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getWeather} from '../services/ChristmasService'
import Snowfall from 'react-snowfall'
import Head from 'next/head'
import { Rudolf } from './Rudolf';
import {Weather} from "./Weather";
import axios from "axios";


class App extends Component {

  state = {
      hind:0,
  }

  async componentDidMount() {
      const api = 'https://dashboard.elering.ee/api/nps/price/EE/current'
      try {
          const response = await axios.get(api);
          this.setState({
              hind: response.data.data[0].price
          });
      } catch (error) {
          console.error(error);
      }
      setInterval(async () => {
          try {
              const response = await axios.get(api);
              this.setState({
                  hind: response.data.data[0].price
              });
          } catch (error) {
              console.error(error);
          }
      }, 3600000);


      let weather = await getWeather();
      this.setState({weather: weather.current.feelslike_c});
      setInterval(async () => {
          let weather = await getWeather();
          this.setState({weather: weather.current.feelslike_c});
      }, 900_000);
    }

  render() {

    return (
      <div className="App">
        <Head>
            <meta http-equiv="refresh" content="30" />
        </Head>
          <Rudolf />
        <div className="rows info">
            <div className={'block price'}>{this.state.hind} €/kWh</div>
            <div className={'block weather'}>
                 <Weather weather={this.state.weather} />
                </div>



        </div>
          <div id="santa">
              <img src="santa.png" />
          </div>
          <Snowfall />
      </div>
    );
  }
}

export default App;