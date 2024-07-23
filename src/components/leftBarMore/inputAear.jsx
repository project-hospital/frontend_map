import React, { useState } from 'react';

export default function InputAear() {
  const [selectedEmoji, setSelectedEmoji] = useState('🙆‍♂️');

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
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

        <div className="flex">
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
          <span role="img" aria-label="white-heart">
            🤍
          </span>
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
