import React from 'react';
import GoogleMapComponent from './G-Map';

function MainContents() {
  return (
    <div className="flex flex-1">
      <div className="w-1/4 p-4 border-r border-gray-300">
        <h2 className="text-2xl font-bold mb-4">제목</h2>
        <p>콘텐츠.</p>
        <p>콘텐츠.</p>
        <p>콘텐츠.</p>
        <p>콘텐츠.</p>
        <p>콘텐츠.</p>
      </div>
      <div className="flex-1 relative">
        <GoogleMapComponent />
      </div>
    </div>
  );
}

export default MainContents;
