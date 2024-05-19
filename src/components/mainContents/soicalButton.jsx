import React from 'react';
import googleLogo from 'assets/google.png';
import kakaoLogo from 'assets/kakao.png';
import facebookLogo from 'assets/facebook.png';

export default function SoicalButton() {
  return (
    <div className="fixed top-2 right-2 flex space-x-8 mt-8 mr-8">
      <button type="button">
        <img src={googleLogo} alt="google_logo" className="w-8 h-auto" />
      </button>
      <button type="button">
        <img src={kakaoLogo} alt="kakao_logo" className="w-8 h-auto" />
      </button>
      <button type="button">
        <img src={facebookLogo} alt="facebook_logo" className="w-8 h-auto" />
      </button>
    </div>
  );
}
