import React, { Component } from 'react';
import Map from '../Map';
import Marker from '../Marker';
import SearchBox from '../SearchBox';
import * as S from './index.styles';

const defaultZoom: number = 13;
const initialCenter = {
  lat: 48.8590453,
  lng: 2.3180404
}

class Container extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lng: null,
      hideToaster: true
    }
  }

  setLatLng = (data) => {
    this.setState({
      lat: data.lat,
      lng: data.lng
    })
  }

  toggleToaster = () => {
    this.setState({hideToaster: !this.state.hideToaster});
  }

  render() {
    const pos = {
      lat: this.state.lat,
      lng: this.state.lng
    }

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    !this.state.hideToaster && setTimeout(() => this.setState({hideToaster: true}), 5000)

    return <div>
      <S.DivToaster
        hide={this.state.hideToaster}
        onClick={this.toggleToaster}
      >
        Job has been successfully created
      </S.DivToaster>
      <SearchBox setData={this.setLatLng} toggleToaster={this.toggleToaster}/>
      <Map
        google={this.props.google}
        zoom={defaultZoom}
        initialCenter={initialCenter}
        centerToCurrentLocation={true}
        position={pos}
      >
        <Marker position={pos}/>
      </Map>
    </div>
  }
}

export default Container;
