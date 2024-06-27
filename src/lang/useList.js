import i18n from 'locales/i18n';

const useList = [
  { value: 'ja', text: '日本語' }, // 일본어
  { value: 'th', text: 'ภาษาไทย' }, // 태국어
  { value: 'ko', text: '한국어' }, // 한국어
  { value: 'zh', text: '简体中文' } // 중국어 (간체)
];

export const setLangeuageValue = () => {
  return useList.find((el) => el.value === i18n.language)?.text;
};

export default useList;
