import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import GoogleMapComponent from './G-Map';
import CommonModal from '../langModal/modal';
import langModalState from '../../store/popup';
import { setLangeuageValue } from '../../lang/useList';
import { ReactComponent as SearchIcon } from '../../assets/search_icon_b.svg'; // Updated path for SearchIcon

export default function MainContents() {
  const [, setModalOpen] = useRecoilState(langModalState);
  const { t } = useTranslation();
  const [searchLanguage, setSearchLanguage] = useState('');

  const handleSearchChange = (e) => {
    setSearchLanguage(e.target.value);
  };

  const [hospitals, setHospitals] = useState([]);

  const getHospitalData = () => {
    axios.get(`/api/hospitals.json`).then(({ data }) => {
      setHospitals(data);
    });
  };

  useEffect(() => {
    getHospitalData();
  }, []);

  return (
    <div className="flex flex-1">
      <div className="w-1/4 p-6 border-r border-gray-300">
        <div className="flex justify-between mb-6">
          <button className="w-32 h-auto border-gray-600 border-2 bg-gray-950 text-white" type="button" onClick={() => setModalOpen(true)}>
            {t('main.languageSet')}
          </button>
          <span>{setLangeuageValue()}</span>
        </div>
        <div className="relative mb-4 w-full">
          <input
            type="text"
            placeholder="검색"
            className="w-full px-4 py-2 bg-white text-black rounded-md border border-gray-300"
            value={searchLanguage}
            onChange={handleSearchChange}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <SearchIcon className="w-5 h-5 text-black" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">주변 추천 외국어 병원</h2>
        {hospitals.map((hospital) => (
          <button type="button" className="w-full text-left mb-4 border border-gray-300 rounded-lg p-4" key={hospital.id}>
            <div>
              <img src={hospital.image} alt="병원 이미지" className="w-full h-48 object-cover mb-2 rounded" />
              <h3 className="text-xl font-semibold">{hospital.name}</h3>
              <p>{hospital.address}</p>
              <span>리뷰 {hospital.reviewCnt}건</span>
              <span className="ml-4">{hospital.languages}</span>
              <p>⭐X{hospital.rating}</p>
            </div>
          </button>
        ))}
        <div className="flex justify-center mt-4">
          <button type="button" className="px-2 py-1 mx-1">
            &lt;
          </button>
          <button type="button" className="px-2 py-1 mx-1">
            1
          </button>
          <button type="button" className="px-2 py-1 mx-1">
            2
          </button>
          <button type="button" className="px-2 py-1 mx-1">
            3
          </button>
          <button type="button" className="px-2 py-1 mx-1">
            4
          </button>
          <button type="button" className="px-2 py-1 mx-1">
            5
          </button>
          <button type="button" className="px-2 py-1 mx-1">
            &gt;
          </button>
        </div>
      </div>
      <div className="flex-1 relative">
        <GoogleMapComponent />
      </div>
      <CommonModal />
    </div>
  );
}
