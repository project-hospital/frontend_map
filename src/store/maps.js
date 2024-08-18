import { atom } from 'recoil';

const mapsDataState = atom({
  key: 'mapsData',
  default: {
    maker: {
      lat: 37.731966380241104, // 위도
      lng: 127.04851891946923 // 경도
    },
    zoom: 15
  }
});

export default mapsDataState;
