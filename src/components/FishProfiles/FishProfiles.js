import React, { useState, useEffect } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './FishProfiles.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProfiles } from '../../redux/FishSlice';

const FishProfiles = () => {
  const { fishProfiles } = useSelector((store) => store.fish);
  const dispatch = useDispatch();
  const [profiles, setProfiles] = useState([]);
  const [region, setRegion] = useState('');
  useEffect(() => {
    if (fishProfiles.length === 0) {
      dispatch(getProfiles());
    }
  }, [dispatch, fishProfiles]);
  useEffect(() => {
    setProfiles(fishProfiles);
  }, [fishProfiles]);

  const regions = [
    { value: 'Alaska', label: 'Alaska' },
    { value: 'Greater Atlantic', label: 'Greater Atlantic' },
    { value: 'Pacific Islands', label: 'Pacific Islands' },
    { value: 'Southeast', label: 'South East' },
    { value: 'West Coast', label: 'West Coast' },

  ];

  const handleChange = (event) => {
    const tempRegion = event.target.value;
    setRegion(tempRegion);
    const newProfiles = fishProfiles.filter((profile) => profile.region.includes(tempRegion));
    setProfiles([...newProfiles]);
  };
  return (
    <>
      <section className="banner">
        <FormControl
          variant="standard"
          sx={{
            m: 1, width: 300, borderRadius: 1, color: 'white',
          }}
        >
          <InputLabel style={{ color: 'white' }} id="demo-simple-select-standard-label">View All By Regions</InputLabel>
          <Select
            style={{ color: 'white' }}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={region}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {
              regions?.map((region) => (
                <MenuItem key={region.value} value={region.value}>
                  {region.label}
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </section>
      <Grid container spacing={1}>
        {profiles.map((profile, index) => (
          <Grid item xs={6} sm={4} md={3} key={profile.id}>
            <NavLink to={`/profiles/${profile.id}`}>
              <Card style={index % 2 === 0
                ? { backgroundColor: '#4369B1' } : { backgroundColor: '#3F61A4' }}
              >
                <CardMedia
                  component="img"
                  sx={{ objectFit: 'contain' }}
                  height="140"
                  image={profile.imageUrl}
                  alt={profile.speciesName}
                />
                <CardContent className="species">
                  <Typography variant="h6" style={{ color: 'white', fontFamily: 'Lato', marginTop: '4px' }} component="div">
                    {profile.speciesName}
                  </Typography>
                  <div className="arrow">
                    <BsArrowRightCircle style={{ color: 'white' }} />
                  </div>
                </CardContent>
              </Card>
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FishProfiles;
