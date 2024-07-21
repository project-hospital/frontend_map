import React from 'react';

export default function ReviewChart() {
  return (
    <div className="mt-4">
      <div className="flex items-center">
        <div className="w-full mr-2">
          <div className="flex items-center mb-1">
            <div className="w-1/12">5</div>
            <div className="w-11/12 bg-gray-200 rounded-full h-1.5">
              <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '90%' }} />
            </div>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-1/12">4</div>
            <div className="w-11/12 bg-gray-200 rounded-full h-1.5">
              <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '70%' }} />
            </div>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-1/12">3</div>
            <div className="w-11/12 bg-gray-200 rounded-full h-1.5">
              <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '50%' }} />
            </div>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-1/12">2</div>
            <div className="w-11/12 bg-gray-200 rounded-full h-1.5">
              <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '30%' }} />
            </div>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-1/12">1</div>
            <div className="w-11/12 bg-gray-200 rounded-full h-1.5">
              <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '10%' }} />
            </div>
          </div>
        </div>
        <div className="ml-4 text-center">
          <div className="text-4xl font-bold">4.1</div>
          <div className="flex justify-center items-center">
            <span role="img" aria-label="red-heart">
              ❤️
            </span>
            <span role="img" aria-label="red-heart">
              ❤️
            </span>
            <span role="img" aria-label="red-heart">
              ❤️
            </span>
            <span role="img" aria-label="red-heart">
              ❤️
            </span>
            <span role="img" aria-label="white-heart">
              🤍
            </span>
          </div>
          <div className="text-gray-500">리뷰 2,977개</div>
        </div>
      </div>
    </div>
  );
}
