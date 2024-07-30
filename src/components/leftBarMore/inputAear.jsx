import React, { useState } from 'react';

export default function InputAear() {
  const [selectedEmoji, setSelectedEmoji] = useState('🙆‍♂️');

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const [rating, setRating] = useState(1);
  const clickRating = (score) => {
    setRating(score);
  };

  return (
    <div>
      <div className="mt-6 flex items-center justify-between">
        <select className="border border-gray-300 rounded p-2">
          <option value="us">🇺🇸 영어</option>
          <option value="de">🇩🇪 독일어</option>
          <option value="fr">🇫🇷 프랑스어</option>
          <option value="cn">🇨🇳 중국어</option>
          <option value="jp">🇯🇵 일본어</option>
        </select>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className={`text-2xl p-2 rounded-full ${selectedEmoji === '🙆‍♂️' ? 'bg-gray-200' : ''}`}
            onClick={() => handleEmojiClick('🙆‍♂️')}
          >
            🙆‍♂️
          </button>
          <button
            type="button"
            className={`text-2xl p-2 rounded-full ${selectedEmoji === '🙅' ? 'bg-gray-200' : ''}`}
            onClick={() => handleEmojiClick('🙅')}
          >
            🙅
          </button>
        </div>
        <div className="flex items-center space-x-1">
          <button
            type="button"
            onClick={() => clickRating(1)}
            data-rating="1"
            aria-label="Rate 1 star"
            className={`rating-star text-gray-300 ${rating >= 1 ? 'text-yellow-300' : ''} hover:text-yellow-300 focus:text-yellow-300`}
          >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => clickRating(2)}
            data-rating="2"
            aria-label="Rate 2 stars"
            className={`rating-star text-gray-300 ${rating >= 2 ? 'text-yellow-300' : ''} hover:text-yellow-300 focus:text-yellow-300`}
          >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => clickRating(3)}
            data-rating="3"
            aria-label="Rate 3 stars"
            className={`rating-star text-gray-300 ${rating >= 3 ? 'text-yellow-300' : ''} hover:text-yellow-300 focus:text-yellow-300`}
          >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => clickRating(4)}
            data-rating="4"
            aria-label="Rate 4 stars"
            className={`rating-star text-gray-300 ${rating >= 4 ? 'text-yellow-300' : ''} hover:text-yellow-300 focus:text-yellow-300`}
          >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => clickRating(5)}
            data-rating="5"
            aria-label="Rate 5 stars"
            className={`rating-star text-gray-300 ${rating >= 5 ? 'text-yellow-300' : ''} hover:text-yellow-300 focus:text-yellow-300`}
          >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-2">
        <textarea
          className="border border-gray-300 rounded w-full p-2 h-24 resize-none"
          placeholder="작성 후 30분 뒤 암호화되어 삭제하실 수 없습니다."
        />
        <button type="button" className="mt-2 w-full bg-blue-500 text-white py-2 rounded">
          등록
        </button>
      </div>
    </div>
  );
}
