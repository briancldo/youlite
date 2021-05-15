import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

interface InfoModalProps {
  open: boolean;
  closeInfoModal: () => void;
}

const InfoModal: React.FC<InfoModalProps> = (props) => {
  const { open, closeInfoModal } = props;

  return (
    <Dialog open={open} onClose={closeInfoModal}>
      <DialogTitle>Information</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Commit hash: {process.env.REACT_APP_COMMIT_HASH}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
