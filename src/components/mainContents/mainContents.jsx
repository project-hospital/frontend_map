import React from 'react';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';
import GoogleMapComponent from './G-Map';
import CommonModal from '../langModal/modal';
import langModalState from '../../store/popup';

export default function MainContents() {
  const [, setModalOpen] = useRecoilState(langModalState);

  const { t } = useTranslation();

  return (
    <div className="flex flex-1">
      <div className="w-1/4 p-4 border-r border-gray-300">
        <button className="w-32 h-auto border-gray-600 border-2 bg-gray-950 text-white" type="button" onClick={() => setModalOpen(true)}>
          {t(`main.languageSet`)}
        </button>

        <h2 className="text-2xl font-bold mb-4">제목</h2>
        <p>콘텐츠.</p>
        <p>콘텐츠.</p>
        <p>콘텐츠.</p>
        <p>콘텐츠.</p>
        <p>콘텐츠.</p>
      </div>
      <div className="flex-1 relative">
        <GoogleMapComponent />
      </div>
      <CommonModal />
    </div>
  );
}
