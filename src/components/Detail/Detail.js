import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Detail.css';
import { FaFish } from 'react-icons/fa';
import HTMLReactParser from 'html-react-parser';

const Detail = () => {
  const { id } = useParams();
  const { fishProfiles } = useSelector((store) => store.fish);

  const selectFish = fishProfiles.find((fish) => fish.id.toString() === id.toString());
  const customStyle = {
    display: 'flex',
    color: 'white',
    fontFamily: 'Lato',
    marginTop: '8px',
    border: '1px solid lightgray',
    boxShadow: '2px 2px 5px lightgray',
    padding: '10px',
    marginBottom: '12px',

  };
  return (
    <Grid item xs={12} sm={6} md={4} key={selectFish.id}>
      <Card style={{ backgroundColor: '#4369B1' }} className="full-height-card">
        <CardMedia
          component="img"
          sx={{ objectFit: 'contain' }}
          height="300"
          image={selectFish.imageUrl}
          alt={selectFish.speciesName}
        />
        <CardContent className="detail">
          <Typography
            variant="h6"
            style={{
              color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            component="div"
          >
            <h1>{selectFish.speciesName}</h1>
          </Typography>
          <Typography variant="h6" style={customStyle} component="div">

            <div className="caption">
              <h4>Taste</h4>
              <FaFish size={20} className="icon" />
            </div>
            <div>{HTMLReactParser(String(selectFish.taste))}</div>

          </Typography>
          <Typography variant="h6" style={customStyle} component="div">

            <div className="caption">
              <h4>Availability</h4>
              <FaFish size={20} className="icon" />
            </div>
            <div>{HTMLReactParser(String(selectFish.availability))}</div>

          </Typography>
          <Typography variant="h6" style={customStyle} component="div">

            <div className="caption">
              <h4>Texture</h4>
              <FaFish size={20} className="icon" />
            </div>
            <div>{HTMLReactParser(String(selectFish.texture))}</div>

          </Typography>
          <Typography variant="h6" style={customStyle} component="div">

            <div className="caption">
              <h4>Source</h4>
              <FaFish size={20} className="icon" />
            </div>
            <div>{HTMLReactParser(String(selectFish.source))}</div>

          </Typography>
          <Typography variant="h6" style={customStyle} component="div">

            <div className="caption">
              <h4>Health Benefits</h4>
              <FaFish size={20} className="icon" />
            </div>
            <div>{HTMLReactParser(String(selectFish.healthBenefits))}</div>

          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Detail;
