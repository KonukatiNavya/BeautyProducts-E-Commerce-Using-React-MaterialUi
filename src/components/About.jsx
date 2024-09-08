import React from 'react';
import { Container, Typography, Grid, Button, Box } from '@mui/material';

const About = () => {
  const containerStyle = {
    minHeight: '60vh', 
    padding: '20px',
    display: 'flex',
    alignItems: 'center', 
  };

  const contentStyle = {
     
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  };
  const contentImg={
    minHeight: '80vh', 
  }

  return (
    <div style={containerStyle}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6} style={contentStyle}>
            <Typography variant="h4" component="h1" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              Meet Beauty Products, a powerful concoction of technology and beauty. A portal which delivers the best of both the worlds. has built a unique, highly personalized online and offline shopping experience for consumers by creating detailed user personas, enabling customers to test make-up, and recommending products based on personality, search keywords, and purchase behavior.
            </Typography>
            <Button variant="contained" color="secondary" href="/services">
              Learn More
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box style={contentImg}
              component="img"
              src="/images/abtgif.gif"
              alt="Beauty Product"
              sx={{ width: '100%', height: '100px' }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
