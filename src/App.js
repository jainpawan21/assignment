import React from "react";
import { connect } from "react-redux";
import { Container, Grid, Box } from "@material-ui/core";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
function App() {
  return (
    <Container>
      <h1>
        <ArrowBackIosIcon />
        Order Summary
      </h1>
      <hr />
      <Grid container spacing={2}>
        <Box clone order={{ xs: 2, sm: 2, md: 1 }}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Products />
          </Grid>
        </Box>
        <Box clone order={{ xs: 1, sm: 1, md: 2 }}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Cart />
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.main.cart,
    products: state.main.products,
  };
};
export default connect(mapStateToProps)(App);
