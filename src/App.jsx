import React from 'react';
import { RecoilRoot } from 'recoil';
import Layout from './components/layout';

export default function App() {
  return (
    <RecoilRoot>
      <Layout />
    </RecoilRoot>
  );
}
