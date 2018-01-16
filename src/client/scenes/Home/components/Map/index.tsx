import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IMapProps } from './types';

// Styled components is not loading the styles correctly
const style = {
  width: '100vw',
  height: '100vh'
};

class Map extends Component<IMapProps, any> {
  private map;

  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }

    // if (prevState.currentLocation !== this.state.currentLocation) {
    //   this.recenterMap();
    // }
  }

  componentDidMount() {
    if (this.props.centerToCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          })
        })
      }
    }
    this.loadMap();
  }

  recenterMap() {
    const map = this.map;
    const { position } = this.props;
    const currLoc = (position.lat !== null && position.lng !== null) ? this.props.position : this.state.currentLocation;
    const { maps } = this.props.google;

    if (map) {
      const center = new maps.LatLng(currLoc.lat, currLoc.lng);
      map.panTo(center);
    }
  }

  renderChildren() {
    const {children} = this.props;

    if (!children) return;

    return React.Children.map(children, (c: any) => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
      });
    })
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const {lat, lng} = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: this.props.zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    return <div style={style} ref='map'>
      Loading Google Map...
      {this.renderChildren()}
    </div>;
  }
}

export default Map;
