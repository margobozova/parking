import React, { Component } from 'react';
import './styles.css';

class ParkingItem extends Component {
  render() {
    const { parking, onParkingSelect, index } = this.props;
    const { data } = parking.properties.layers['parking.garage'];

    return(
      <div
        onClick={() => onParkingSelect(index)}
        className="parking-title"
      >
        {parking.properties.title}
        <div className="parking-capacity">Long: {data.FreeSpaceLong}/{data.LongCapacity}</div>
        <div className="parking-capacity">Short: {data.FreeSpaceShort}/{data.ShortCapacity}</div>
      </div>
    );
  }
}

export default ParkingItem;