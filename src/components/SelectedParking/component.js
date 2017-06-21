/*global google*/
import React, { Component } from 'react';
import './styles.css';

class SelectedParking extends Component {
  showMap () {
    const { parking } = this.props;
    const { coordinates } = parking.geometry;
    const position = { lat: coordinates[1], lng: coordinates[0] };
    const { data } = parking.properties.layers['parking.garage'];
    const contentInfoWindow = `
      <div class="parking-capacity">Long: ${data.FreeSpaceLong}/${data.LongCapacity}</div>
      <div class="parking-capacity">Short: ${data.FreeSpaceShort}/${data.ShortCapacity}</div>
    `;

    const map = new google.maps.Map(this.refs.map, {
      center: position,
      zoom: 13
    });
    const marker = new google.maps.Marker({ position, map });
    console.log(parking);
    const infowindow = new google.maps.InfoWindow({
      content: contentInfoWindow
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }

  componentDidMount() {
    this.showMap();
  }

  componentDidUpdate() {
    this.showMap();
  }

  render() {
    return (
      <div className="selected-parking">
        <div id="map" ref="map" />
      </div>
    );
  }
}

export default SelectedParking;
