// components/AddServicePopup.js
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const AddServicePopup = ({ open, onClose, onAddService }) => {
  const [monitorType, setMonitorType] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [serviceURL, setServiceURL] = useState('');

  const handleAddService = () => {
    onAddService({ monitorType, serviceName, serviceURL });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add a New Service</DialogTitle>
      <DialogContent>
        <TextField label="Monitor Type" value={monitorType} onChange={(e) => setMonitorType(e.target.value)} fullWidth />
        <TextField label="Service Name" value={serviceName} onChange={(e) => setServiceName(e.target.value)} fullWidth />
        <TextField label="Service URL" value={serviceURL} onChange={(e) => setServiceURL(e.target.value)} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddService}>Add</Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddServicePopup;
