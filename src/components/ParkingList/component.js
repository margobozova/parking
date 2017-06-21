import React, { Component } from 'react';
import './styles.css';

import ParkingItem from '../ParkingItem';

class ParkingList extends Component {

  render() {
    const { parkings, onParkingSelect } = this.props;

    return (
      <div className="parking-list">
        {parkings.map((parking, index) => (
          <ParkingItem
            className="parking-item"
            key={parking['@id']}
            parking={parking}
            index={index}
            onParkingSelect={onParkingSelect}
          />
        ))}
      </div>
    );
  }
}

export default ParkingList;
