import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
// import { setLangeuageValue } from '../../lang/useList';
// import { ReactComponent as SearchIcon } from '../../assets/search_icon_b.svg'; // Updated path for SearchIcon
import langModalState from '../../store/popup';
import leftMoreState from '../../store/leftMore';
import LeftMoreBar from '../leftBarMore/leftMoreBar';

export default function LeftBar() {
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

  const [isLeftMoreOpen, setLeftMoreOpen] = useRecoilState(leftMoreState);

  return (
    <div className="absolute top-0 border-r border-gray-300 bg-white z-10 flex flex-1 h-screen">
      <div className="w-96 p-6 border-r-2 overflow-y-auto">
        <div className="flex justify-between mb-6">
          <button className="w-32 h-auto border-gray-600 border-2 bg-gray-950 text-white" type="button" onClick={() => setModalOpen(true)}>
            {t('main.languageSet')}
          </button>
          {/* <span>{setLangeuageValue()}</span> */}
        </div>
        <div className="relative mb-4 w-full">
          <input
            type="text"
            placeholder="검색"
            className="w-full px-4 py-2 bg-white text-black rounded-md border border-gray-300"
            value={searchLanguage}
            onChange={handleSearchChange}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">{/* <SearchIcon className="w-5 h-5 text-black" /> */}</div>
        </div>
        <h2 className="text-2xl font-bold mb-4">주변 추천 외국어 병원</h2>
        {hospitals.map((hospital) => (
          <button
            type="button"
            className="w-full text-left mb-4 border border-gray-300 rounded-lg p-4"
            key={hospital.id}
            onClick={() => setLeftMoreOpen(true)}
          >
            <div>
              <img src={hospital.image} alt="병원 이미지" className="w-full h-48 object-cover mb-2 rounded" />
              <h3 className="text-xl font-semibold">{hospital.name}</h3>
              <p>{hospital.address}</p>
              <span>리뷰 {hospital.reviewCnt}건</span>
              <span className="ml-4">{hospital.languages}</span>
              <div className="flex">
                <svg
                  className="w-4 h-4 text-yellow-300 self-center mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                X {hospital.rating}
              </div>
            </div>
          </button>
        ))}
      </div>
      {isLeftMoreOpen && <LeftMoreBar />}
    </div>
  );
}
