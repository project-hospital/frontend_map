import React from 'react';
import specialThanks from 'assets/specialThanks.png';
import ReactCanvasConfetti from './ReactCanvasConfetti';
import styles from './SpecialThanks.module.scss';

export default function SpecialThanks() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 z-30 h-auto">
      <img src={specialThanks} alt="specialThanks" />
      <div className="relative">
        <ReactCanvasConfetti />
      </div>

      <h1 className={styles.header}>너무 큰 도움이 되었습니다!!!</h1>
    </div>
  );
}
