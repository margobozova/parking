import React, { Component } from 'react';
import './App.css';

import ParkingList from '../ParkingList';
import SelectedParking from '../SelectedParking';

class App extends Component {
  state = {
    parkings: [],
    index: null
  };

  componentDidMount() {
    fetch('http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25')
      .then( res => res.json())
      .then(data => this.setState({ parkings: data.features }));
  }
  onParkingSelect = (index) => {
    this.setState({ index });
  };

  render() {
    const { parkings, index } = this.state;
    const parking = parkings.length > 0 ? parkings[index] : null;
    return (
      <div className="App">
        <ParkingList parkings={parkings} onParkingSelect={this.onParkingSelect} />
        {parking && <SelectedParking parking={parking} />}
        <div className="clear" />
      </div>
    );
  }
}

export default App;
