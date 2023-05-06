import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const url = 'https://www.fishwatch.gov/api/species';

export const getProfiles = createAsyncThunk('fish', async () => {
  const response = await fetch(url);
  const result = await response.json();

  const speciesData = result.map((species) => ({
    id: uuidv4(),
    speciesName: species['Species Name'],
    imageUrl: species['Species Illustration Photo'].src,
    region: species['NOAA Fisheries Region'],
    availability: species.Availability,
    taste: species.Taste,
    source: species.Source,
    texture: species.Texture,
    healthBenefits: species['Health Benefits'],

  }));

  return speciesData;
});

const initialState = {
  fishProfiles: [],
  loading: false,
  error: null,
};

const fishSlice = createSlice({
  name: 'fishProfiles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfiles.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getProfiles.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        fishProfiles: action.payload,
      }))
      .addCase(getProfiles.rejected, (state) => ({
        ...state,
        loading: true,
      }));
  },
});

export default fishSlice.reducer;
