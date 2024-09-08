import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const Contact = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url(/images/cont.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '85vh',
    padding: '20px',
    
  };

  const textStyle = {
    color: '#e6ee9c', // Example color: HotPink
  };

  return (
    <div style={backgroundImageStyle}>
      <Container>
        <Typography variant="h4" gutterBottom style={textStyle}>
          Contact Us
        </Typography>
        <Box mb={2}>
          <Typography variant="body1" style={textStyle}>
            Email: <Link href="mailto:contact@beautyproducts.com" color="inherit">contact@beautyproducts.com</Link>
            <br />
            Phone: +1 (123) 456-7890
            <br />
            Address: 123 Beauty Lane, Cosmetic City, CA 90210
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom style={textStyle}>
            Follow Us
          </Typography>
          <Typography variant="body1" style={textStyle}>
            <Link href="https://www.facebook.com/beautyproducts" color="inherit" target="_blank" rel="noopener">Facebook</Link>
            <br />
            <Link href="https://www.instagram.com/beautyproducts" color="inherit" target="_blank" rel="noopener">Instagram</Link>
            <br />
            <Link href="https://www.twitter.com/beautyproducts" color="inherit" target="_blank" rel="noopener">Twitter</Link>
            <br />
            <Link href="https://www.linkedin.com/company/beautyproducts" color="inherit" target="_blank" rel="noopener">LinkedIn</Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
