import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import InfoModal from './InfoModal';

const InfoModalButton: React.FC = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  function openInfoModal() {
    setIsInfoModalOpen(true);
  }

  function closeInfoModal() {
    setIsInfoModalOpen(false);
  }

  return (
    <>
      <IconButton onClick={openInfoModal}>
        <InfoIcon />
      </IconButton>
      <InfoModal open={isInfoModalOpen} closeInfoModal={closeInfoModal} />
    </>
  );
};

export default InfoModalButton;
