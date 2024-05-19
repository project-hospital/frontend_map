import React from 'react';
import MainContents from './mainContents/mainContents';
import SoicalButton from './mainContents/soicalButton';

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <section className="flex flex-col flex-1">
        <MainContents />
      </section>

      {/* <div className="flex justify-center items-center text-3xl font-bold h-16">푸터</div> */}

      <SoicalButton />
    </div>
  );
}
