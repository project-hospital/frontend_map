import React from 'react';
import { useRecoilState } from 'recoil';
import leftMoreState from '../../store/leftMore';
import TopTitle from './topTitle';
import ReviewChart from './reviewChart';
import InputAear from './inputAear';
import ReviewList from './reviewList';

export default function LeftMoreBar() {
  const [, setLeftMoreOpen] = useRecoilState(leftMoreState);

  return (
    <div className="w-96 relative border-r border-gray-300 h-screen bg-white">
      <div className="p-6 h-screen overflow-y-auto">
        <TopTitle />
        <ReviewChart />

        <InputAear />
        <ReviewList />
      </div>

      {/* 닫기 버튼 */}
      <button
        type="button"
        className="absolute top-1/2 left-full transform -translate-y-1/2 z-10 bg-white rounded-r-md border-t-2 border-r-2 border-b-2 w-5 h-8 text-sm"
        onClick={() => setLeftMoreOpen(false)}
      >
        ◀
      </button>
    </div>
  );
}
