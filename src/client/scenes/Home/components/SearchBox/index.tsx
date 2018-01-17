import React, { Component } from 'react';
import * as S from './index.styles';
import axios from 'axios';
import { ISearchBoxProps } from './types';

class SearchBox extends Component<ISearchBoxProps, any> {
  constructor(props) {
    super(props);

    this.state = {
      pickupColor: null,
      dropoffColor: null,
      isCreating: false,
      pickupAddress: '',
      dropoffAddress: '',
      jobCreated: false
    }
  }

  delay(ms: number) {
    return function(x) {
      return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
  }

  verifyAddress = (e: any) => {
    const { value, name } = e.target;
    const { jobCreated } = this.state;

    axios.post('/api/geocode', {
      address: value
    }).then((res: any) => {
      const data = {
        lat: res.data.latitude,
        lng: res.data.longitude
      };
      this.props.setData(data);
      (name === 'pickup') && this.setState({pickupColor: 'orange'});
      (name === 'dropoff') && this.setState({dropoffColor: 'green'});
    }).catch((err) => {
      (name === 'pickup') && this.setState({pickupColor: 'red', pickupAddress: 'Invalid pickup address'});
      (name === 'dropoff') && this.setState({dropoffColor: 'red', dropoffAddress: 'Invalid dropoff address'});
    })
  }

  handleClick = (e: any) => {
    const { value, name } = e.target;
    this.setState({isCreating: true});

    axios.post('/api/jobs', {
      pickup: this.state.pickupAddress,
      dropoff: this.state.dropoffAddress
    }).then(this.delay(2000)).then((res) => {
      this.setState({
        isCreating: false,
        pickupAddress: '',
        dropoffAddress: '',
        jobCreated: true,
        pickupColor: 'lightgrey',
        dropoffColor: 'lightgrey'
      });
      this.props.toggleToaster();
    });
  }

  disableButton() {
    const { pickupAddress, dropoffAddress }= this.state;
    if (pickupAddress !== '' && dropoffAddress !== '' && pickupAddress !== 'Invalid pickup address' && dropoffAddress !== 'Invalid pickup address') {
      return false;
    }
    return true;
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    (name === 'pickup') && this.setState({pickupAddress: value});
    (name === 'dropoff') && this.setState({dropoffAddress: value});
  }

  render() {
    return <S.DivSearchBox>
      <S.InputContainer>
        <S.Indicator color={this.state.pickupColor}/>
        <S.TextFields
          type='text'
          name='pickup'
          value={this.state.pickupAddress}
          placeholder='Pick up address'
          onBlur={this.verifyAddress}
          onChange={this.handleChange}
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.Indicator color={this.state.dropoffColor}/>
        <S.TextFields
          type='text'
          name='dropoff'
          value={this.state.dropoffAddress}
          placeholder='Drop off address'
          onBlur={this.verifyAddress}
          onChange={this.handleChange}
        />
      </S.InputContainer>
      <div>
        <S.Button
          isCreating={this.state.isCreating}
          onClick={this.handleClick}
          disabled={this.disableButton()}
        >
          {this.state.isCreating ? 'Creating...' : 'Create a job'}
        </S.Button>
      </div>
    </S.DivSearchBox>
  }
}

export default SearchBox;
