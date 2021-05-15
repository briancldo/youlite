import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

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
      <Button onClick={openInfoModal}>View Info</Button>
      <InfoModal open={isInfoModalOpen} closeInfoModal={closeInfoModal} />
    </>
  );
};

export default InfoModalButton;
