'use client'
import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const defaultCampaignData  = {
  name: 'Mystical Adventure',
  description: 'An epic journey through a land of magic and mystery.'
};

const CampaignPage = () => {
  const [campaignData, setCampaignData] = useState(defaultCampaignData);
  const [isEditing, setIsEditing] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

 

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSave = () => {
    // Handle saving the updated campaign data here
    // For example, sending data to a server
    setIsEditing(false);
    handleDialogClose();
  };

  return (
    <Paper style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h4">{campaignData.name}</Typography>

      <Box display="flex" justifyContent="flex-end" gap={2} mb={2}>
        <Button variant="outlined" color="primary" onClick={handleEditToggle}>
          {isEditing ? 'Cancel' : 'Edit'}
        </Button>
        {isEditing && (
          <Button variant="contained" color="primary" onClick={handleDialogOpen}>
            Save
          </Button>
        )}
      </Box>

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

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>{"Save Changes?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to save the changes made to your campaign?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default CampaignPage;
