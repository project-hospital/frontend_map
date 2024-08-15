import React from 'react';
import { useRecoilState } from 'recoil';
import GoogleMapComponent from './G-Map';
import CommonModal from '../langModal/modal';
import LeftBar from './leftBar';
import SpecialThanks from '../specialThanks/SpecialThanksPage';
import specialThanksState from '../../store/specialThanksState';

export default function MainContents() {
  const [isOpenThanksPopup] = useRecoilState(specialThanksState);

  return (
    <div className="relative flex flex-1">
      <LeftBar />
      <GoogleMapComponent />

      {isOpenThanksPopup && <SpecialThanks />}

      <CommonModal />
    </div>
  );
}
