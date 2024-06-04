import { atom } from 'recoil';

const textState = atom({
  key: 'textState',
  default: 'recoil test'
});

export default textState;
