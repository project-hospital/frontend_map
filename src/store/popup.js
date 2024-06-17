import { atom } from 'recoil';

const langModalState = atom({
  key: 'modalIsOpen',
  default: false
});

export default langModalState;
