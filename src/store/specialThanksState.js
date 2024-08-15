import { atom } from 'recoil';

const specialThanksState = atom({
  key: 'isSpecialThanksOpen',
  default: false
});

export default specialThanksState;
