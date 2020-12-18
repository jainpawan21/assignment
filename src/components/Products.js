import React from "react";
import Card from "./Card";
import { Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import {fetchStore} from '../redux/actions'
const Products = (props) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} md={8}>
          Items({props.items})
        </Grid>
        <Grid item xs={4} md={3} align="center">
          Qty
        </Grid>
        <Grid item xs={1} align="center">
          Price
        </Grid>
      </Grid>
      <hr />
      {props.products.length > 0 ? (
        props.products.map((item, index) => {
          return (
            <Card
              key={index}
              id={item.id}
              src={item.img_url}
              price={item.price}
              name={item.name}
              type={item.type}
              quantity={item.quantity}
            />
          );
        })
      ) : (
          <Button variant="contained" color="primary" onClick={() => {
            props.fetchStore()
          }}>
          Load Items
        </Button>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.main.products,
    items: state.main.cart.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStore: () =>  dispatch(fetchStore())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
