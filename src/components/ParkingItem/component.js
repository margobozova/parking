import React, { Component } from 'react';

class ParkingItem extends Component {
  render() {
    const { parking, onParkingSelect, index } = this.props;
    return(
      <div
        onClick={() => onParkingSelect(index)}
        className="parking-title"
      >
        {parking.properties.title}
      </div>
    );
  }
}

export default ParkingItem;