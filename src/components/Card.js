import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  IconButton,
  Avatar,
  Grid,
  TextField,
  Snackbar,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import MuiAlert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
} from "../redux/actions";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: "10px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  iconButton: {
    marginTop: "10px",
  },
  iconButton1: {
    marginTop: "15px",
  },
}));

function MyCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={6} md={8}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                className={classes.avatar}
                alt={props.key}
                src={props.src}
              ></Avatar>
            }
            action={
              <IconButton
                size="small"
                onClick={() => {
                  setOpen(true);
                  props.deleteItem(props.id);
                }}
                className={classes.iconButton}
              >
                <HighlightOffIcon />
              </IconButton>
            }
            title={props.name}
            subheader={props.type}
          />
        </Card>
      </Grid>
      <Grid item xs={1}>
        <IconButton
          size="small"
          color="secondary"
          disabled={props.quantity === 0}
          onClick={() => props.decreaseQuantity(props.id)}
          className={classes.iconButton1}
        >
          <RemoveCircleIcon />
        </IconButton>
      </Grid>
      <Grid item xs={2} md={1} align="center">
        <TextField
          disabled
          id={`quantity + ${props.id}`}
          variant="filled"
          value={props.quantity}
        />
      </Grid>
      <Grid item xs={1} align="center">
        <IconButton
          size="small"
          color="primary"
          onClick={() => props.increaseQuantity(props.id)}
          className={classes.iconButton1}
        >
          <AddCircleIcon />
        </IconButton>
      </Grid>
      <Grid item xs={1} align="center">
        <div className={classes.iconButton1}>${props.price}</div>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="success"
        >
          Item Deleted!
        </MuiAlert>
      </Snackbar>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseQuantity: (id) => dispatch(increaseQuantity(id)),
    decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
    deleteItem: (id) => dispatch(deleteItem(id)),
  };
};
export default connect(null, mapDispatchToProps)(MyCard);
