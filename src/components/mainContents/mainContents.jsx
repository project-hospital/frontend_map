import React from 'react';
import GoogleMapComponent from './G-Map';
import CommonModal from '../langModal/modal';
import LeftBar from './leftBar';
import SpecialThanks from '../specialThanks/SpecialThanks';

export default function MainContents() {
  return (
    <div className="relative flex flex-1">
      <LeftBar />
      <GoogleMapComponent />
      <SpecialThanks />

      <CommonModal />
    </div>
  );
}
