import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: "300px",
  },
  total: {
    backgroundColor: "#eeeeee",
    padding: "10px",
    margin: 0,
  },
});

const Cart = (props) => {
  const classes = useStyles();
  return (
    <Grid align="center">
      <Card className={classes.root}>
        <CardContent>
          <h3 align="left">Total</h3>
          <Grid container pacing={1}>
            <Grid item xs={7} align="left">
              Items({props.cart.items})
            </Grid>
            <Grid item xs={1} align="center">
              :
            </Grid>
            <Grid item xs={4} align="right">
              ${props.cart.price}
            </Grid>
          </Grid>
          <br />
          <Grid container pacing={1}>
            <Grid item xs={7} align="left">
              Discount
            </Grid>
            <Grid item xs={1} align="center">
              :
            </Grid>
            <Grid item xs={4} align="right">
              -${props.cart.discount}
            </Grid>
          </Grid>
          <Grid container pacing={1}>
            <Grid item xs={7} align="left">
              Type Discount
            </Grid>
            <Grid item xs={1} align="center">
              :
            </Grid>
            <Grid item xs={4} align="right">
              -${props.cart.typeDiscount}
            </Grid>
          </Grid>
          <br />
          <Grid container pacing={1} className={classes.total}>
            <Grid item xs={7} align="left">
              Order Total
            </Grid>
            <Grid item xs={1} align="center">
              :
            </Grid>
            <Grid item xs={4} align="right">
              <b>
                $
                {props.cart.price -
                  props.cart.discount -
                  props.cart.typeDiscount}
              </b>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.main.cart,
  };
};
export default connect(mapStateToProps)(Cart);
