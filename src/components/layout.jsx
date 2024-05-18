import React from 'react';
import MainContents from './mainContents/mainContents';

function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex flex-col flex-1">
        <div className="flex justify-center items-center text-3xl font-bold h-16">헤더</div>
        <MainContents />
        <div className="flex justify-center items-center text-3xl font-bold h-16">푸터</div>
      </header>
    </div>
  );
}

export default Layout;
