import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url(/images/hom.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '85vh', 
    padding: '20px',
    display: 'flex',
    alignItems: 'center', 
  };

  const textStyle = {
    color: '#212121', 
    fontFamily: 'Arial, sans-serif', 
  };

  return (
    <div style={backgroundImageStyle}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h4" 
              component="h1" 
              gutterBottom
              sx={textStyle}
            >
              Explore Latest Products
            </Typography>
            <Typography 
              variant="body1" 
              gutterBottom
              sx={textStyle}
            >
              Explore our range of services including beauty consultations, makeup tips, and more. We offer a wide variety of products to suit all your beauty needs. Whether you're looking for skincare, makeup, or haircare products, we've got you covered.
            </Typography>
            <Button variant="contained" color="primary" href="/services">
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
