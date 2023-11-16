'use client'
import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Box } from '@mui/material';

const CampaignPage = ({ initialCampaignData }) => {
  const [campaignData, setCampaignData] = useState(initialCampaignData);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Handle saving the updated campaign data
    setIsEditing(false);
  };

  return (
    <Paper style={{ padding: '20px', margin: '20px' }}>
      {/* Campaign Title */}
      <Typography variant="h4">{campaignData.name}</Typography>

      {/* Campaign Description */}
      {isEditing ? (
        <TextField
          label="Campaign Description"
          multiline
          fullWidth
          rows={4}
          value={campaignData.description}
          onChange={(e) => setCampaignData({ ...campaignData, description: e.target.value })}
        />
      ) : (
        <Typography variant="body1">{campaignData.description}</Typography>
      )}

      <Button variant="outlined" color="primary" onClick={handleEditToggle}>
        {isEditing ? 'Cancel' : 'Edit'}
      </Button>

      {isEditing && (
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      )}


    </Paper>
  );
};

export default CampaignPage;
