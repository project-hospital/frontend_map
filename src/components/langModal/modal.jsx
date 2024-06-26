import React, { useState } from 'react';
import Modal from 'react-modal';
import { useRecoilState } from 'recoil';
import i18n from 'locales/i18n';
import langModalState from '../../store/popup';
import useList from '../../lang/useList';
import { ReactComponent as GlobeIcon } from '../../assets/GlobeIcon.svg';
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg';
import { ReactComponent as CheckIcon } from '../../assets/CheckIcon.svg';
import styles from './CommonModal.module.css';

const INITIAL_LANGUAGE = 'ko';

export default function CommonModal() {
  const [modalIsOpen, setIsOpen] = useRecoilState(langModalState);
  const [searchLanguage, setsearchLanguage] = useState('');
  const [filteredLanguages, setFilteredLanguages] = useState(useList);
  const [selectedLanguage, setSelectedLanguage] = useState(INITIAL_LANGUAGE);

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setsearchLanguage(term);
    setFilteredLanguages(term ? useList.filter((language) => language.text.toLowerCase().includes(term)) : useList);
  };

  const handleLanguageSelect = (value) => {
    setSelectedLanguage(value);
  };

  const setLanguage = () => {
    i18n.changeLanguage(selectedLanguage);
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setIsOpen(false)}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      shouldCloseOnOverlayClick
      ariaHideApp={false}
    >
      <div className="flex flex-col items-center mb-4">
        <span className="h-8 w-8 text-white">
          <GlobeIcon />
        </span>
        <h2 className="text-xl font-bold mt-2">표시 언어</h2>
      </div>
      <div className="relative mb-4 w-full">
        <input
          type="text"
          placeholder="검색"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-md"
          value={searchLanguage}
          onChange={handleSearchChange}
        />
        <div className="absolute right-3 top-0 h-full flex items-center">
          <SearchIcon />
        </div>
      </div>
      <ul className={`mb-4 overflow-y-auto max-h-40 w-full ${styles.customScrollbar}`}>
        {filteredLanguages.map((language) => (
          <li className="py-1 flex items-center" key={language.value}>
            {selectedLanguage === language.value && <CheckIcon className="h-5 w-5" />}
            <button
              className="w-full text-left border border-transparent hover:border-gray-500 rounded-md px-2 py-1 hover:bg-gray-700 hover:text-white"
              type="button"
              onClick={() => handleLanguageSelect(language.value)}
            >
              {language.text}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex justify-end w-full">
        <button type="button" className="mr-2 text-gray-400 hover:text-gray-200" onClick={() => setIsOpen(false)}>
          취소
        </button>
        <button type="button" className="text-blue-500 hover:text-blue-300" onClick={setLanguage}>
          확인
        </button>
      </div>
    </Modal>
  );
}
