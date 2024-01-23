// pages/index.js
import React, { useState } from 'react';
import AddServicePopup from '../components/AddServicePopup';
import { Button, Alert } from '@mui/material';

const Home = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [successBanner, setSuccessBanner] = useState(false);
  const [errorBanner, setErrorBanner] = useState(false);

  const handleAddService = async (serviceData) => {
    try {
      // Make API call to add a new service
      const response = await fetch('/api/addService', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      });

      if (response.ok) {
        // Show success banner
        setSuccessBanner(true);
        setErrorBanner(false);
      } else {
        // Show error banner
        setSuccessBanner(false);
        setErrorBanner(true);
      }
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  return (
    <div>
      <Button onClick={() => setPopupOpen(true)}>Open Add Service Popup</Button>
      <AddServicePopup open={popupOpen} onClose={() => setPopupOpen(false)} onAddService={handleAddService} />

      {successBanner && <Alert severity="success">Service added successfully!</Alert>}
      {errorBanner && <Alert severity="error">Error adding service.</Alert>}
    </div>
  );
};

export default Home;
