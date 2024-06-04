import React from 'react';
import Modal from 'react-modal';
import { useRecoilState } from 'recoil';
import textState from '../../store/popup';

export default function CommonModal() {
  const [popup] = useRecoilState(textState);

  const customModalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      width: '100%',
      height: '100vh',
      zIndex: '10',
      position: 'fixed',
      top: '0',
      left: '0'
    },
    content: {
      width: '360px',
      height: '180px',
      zIndex: '150',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
      backgroundColor: 'white',
      justifyContent: 'center',
      overflow: 'auto'
    }
  };

  const [modalIsOpen, setIsOpen] = React.useState(true);

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={customModalStyles} shouldCloseOnOverlayClick ariaHideApp={false}>
      <h2>언어 선택 {popup}</h2>
      <button type="button" onClick={() => setIsOpen(false)}>
        close
      </button>
    </Modal>
  );
}
