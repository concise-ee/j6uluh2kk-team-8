import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getWeather} from '../services/ChristmasService'
import Snowfall from 'react-snowfall'
import Head from 'next/head'
import { Rudolf } from './Rudolf';
import {Weather} from "./Weather";


class App extends Component {

  state = {
    christmas: {},
  }

    async componentDidMount() {
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
        <div className="row mrgnbtm">
          <Rudolf />
          <Weather weather={this.state.weather} />
          <Snowfall />
        </div>
          <div id="santa">
              <img src="santa.png" />
          </div>
      </div>
    );
  }
}

export default App;