import React, { useState } from 'react';
import { TextField, Button, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio, TextareaAutosize } from '@mui/material';

const CampaignForm = () => {
  const [campaignName, setCampaignName] = useState('');
  const [campaignTone, setCampaignTone] = useState('');
  const [stylePreferences, setStylePreferences] = useState({
    fantasyLevel: false,
    magicPrevalence: false,
    combatFocus: false,
    diplomacyFocus: false
  });
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you'd handle the form submission, sending the data to your backend
    console.log({ campaignName, campaignTone, stylePreferences, description });
  };

  return (
    <form onsubmit={handleSubmit}>
      <TextField
        label="Campaign Name"
        variant="outlined"
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
        fullWidth
        margin="normal"
      />

      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Tone Selection</FormLabel>
        <RadioGroup
          aria-label="tone"
          name="tone"
          value={campaignTone}
          onChange={(e) => setCampaignTone(e.target.value)}
        >
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
          <FormControlLabel value="adventurous" control={<Radio />} label="Adventurous" />
          <FormControlLabel value="mystical" control={<Radio />} label="Mystical" />
          {/* Add other tones as needed */}
        </RadioGroup>
      </FormControl>


      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Style Preferences</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={stylePreferences.fantasyLevel} onChange={(e) => setStylePreferences({ ...stylePreferences, fantasyLevel: e.target.checked })} />}
            label="High Fantasy Level"
          />
          <FormControlLabel
            control={<Checkbox checked={stylePreferences.magicPrevalence} onChange={(e) => setStylePreferences({ ...stylePreferences, magicPrevalence: e.target.checked })} />}
            label="Magic Prevalence"
          />
          {/* Add other preferences as needed */}
        </FormGroup>
      </FormControl>


      <TextareaAutosize
        aria-label="description"
        minRows={3}
        placeholder="Campaign Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: '100%', margin: '1rem 0' }}
      />

      <Button variant="contained" color="primary" type="submit">
        Create Campaign
      </Button>

    </form>
  );
};

export default CampaignForm;
