import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';
import productsData from '../data/products.json';

const Services = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card
              className="zoom-card"
              sx={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#80cbc4', 
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt={product.name}
                sx={{
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body1">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  ${product.price}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#4527a0', 
                    '&:hover': {
                      backgroundColor: '#e91e63',
                    },
                  }}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
