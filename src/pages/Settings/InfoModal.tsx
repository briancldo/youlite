import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

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
          <b>Hash:</b> {process.env.REACT_APP_COMMIT_HASH}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeInfoModal}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoModal;
