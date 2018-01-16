export interface IMapProps {
  google: IGoogle;
  zoom: number;
  initialCenter: IPosition;
  centerToCurrentLocation: boolean;
  position: IPosition;
}

export interface IGoogle {
  maps: any
}

export interface IPosition {
  lat: number;
  lng: number;
}
