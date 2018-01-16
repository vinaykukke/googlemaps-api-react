import Container from './components/Container';
import {GoogleApiWrapper} from 'google-maps-react';

const __APIKEY__: string = 'AIzaSyDjtvuoieFKadSyx3H0mac1dp8IMhuXNYQ';

export default GoogleApiWrapper({
  apiKey: __APIKEY__
})(Container);
