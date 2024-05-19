import React from 'react';
import MainContents from './mainContents/mainContents';
// import googleLogo from '../assets/google.png';
import kakaoLogo from '../assets/kakao.png';
import facebookLogo from '../assets/facebook.png';
import googleLogo from '/assert/google.png';

function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <section className="flex flex-col flex-1">
        <MainContents />
      </section>

      {/* <div className="flex justify-center items-center text-3xl font-bold h-16">푸터</div> */}

      <div className="fixed top-2 right-2 flex space-x-8 mt-8 mr-8">
        <img src={googleLogo} alt="google_logo" className="w-8 h-auto" />
        <img src={kakaoLogo} alt="kakao_logo" className="w-8 h-auto" />
        <img src={facebookLogo} alt="facebook_logo" className="w-8 h-auto" />
      </div>
    </div>
  );
}

export default Layout;
