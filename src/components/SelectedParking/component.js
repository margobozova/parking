import React, { Component } from 'react';
import './styles.css';

class SelectedParking extends Component {
  render() {
    const { parking } = this.props;
    const FreeSpaceShort = parking.properties.layers['parking.garage'].data.FreeSpaceShort;
    const FreeSpaceLong = parking.properties.layers['parking.garage'].data.FreeSpaceLong;
    const ShortCapacity = parking.properties.layers['parking.garage'].data.ShortCapacity;
    const LongCapacity = parking.properties.layers['parking.garage'].data.LongCapacity;

    return (
      <div className="selected-parking">
        <span>FreeSpaceShort: {FreeSpaceShort} </span>
        <span>FreeSpaceLong: {FreeSpaceLong} </span>
        <span>ShortCapacity: {ShortCapacity} </span>
        <span>LongCapacity: {LongCapacity} </span>
      </div>
    );
  }
}

export default SelectedParking;
