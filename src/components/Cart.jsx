// src/components/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, List, ListItem, ListItemText, Button, Typography, Box } from '@mui/material';
import { removeItemFromCart, incrementItemQuantity, decrementItemQuantity } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleIncrementQuantity = (id) => {
    dispatch(incrementItemQuantity(id));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrementItemQuantity(id));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Cart
      </Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center' }}>
            <ListItemText
              primary={item.name}
              secondary={`Quantity: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`}
            />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="outlined" onClick={() => handleDecrementQuantity(item.id)}>
                -
              </Button>
              <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
              <Button variant="outlined" onClick={() => handleIncrementQuantity(item.id)}>
                +
              </Button>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleRemoveFromCart(item.id)}
              sx={{ ml: 2 }}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" component="p" sx={{ mt: 3 }}>
        Total Price: ${calculateTotalPrice()}
      </Typography>
    </Container>
  );
};

export default Cart;
