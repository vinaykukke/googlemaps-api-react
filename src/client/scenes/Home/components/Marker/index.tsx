import React, { Component } from 'react';
import { IMarketProps } from './types';

export default class Marker extends Component<IMarketProps, any> {
  private marker;

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    // This means that the relevent props have changed or the map has been updated
    if ((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position)) {
        this.renderMarker();
    }
  }

  renderMarker() {
    let { map, google, position } = this.props;
    position = new google.maps.LatLng(position.lat, position.lng);

    const markerConfig = {
      map: map,
      position: position
    };
    this.marker = new google.maps.Marker(markerConfig);
  }

  render() {
    return <div>Loading marker...</div>
  }
}
