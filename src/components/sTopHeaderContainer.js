import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Redirect, NavLink } from "react-router-dom";

import {useRoutes, A} from "hookrouter";
import routes from "./sRoutes";
import NoPageFound from "./sNoPageFound";


import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `0px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));


function TopHeaderContainer (){

  const classes = useStyles();

  return (


  <header className='App-s-header gradient'>

  <div>
  <AppBar position="sticky" color="white"  elevation={0} className={classes.appBar} borderBottom={0} borderColor="white">
    <Toolbar className={classes.toolbar}>
      <Typography variant="h6" color="orange" noWrap className={classes.toolbarTitle}>
        Inventory OS
      </Typography>
      <nav>
        <Link variant="button" color="textPrimary" href="#pricing" className={classes.link}>
          Pricing
        </Link>
        <Link variant="button" color="textPrimary" href="http://app.rtcxpress.com/#/login" className={classes.link}>
          Login
        </Link>
        <Button href="http://app.rtcxpress.com/#/signup" color="primary" variant="outlined" className={classes.link}>
          Sign Up
        </Button>
      </nav>
    </Toolbar>
  </AppBar>
  </div>



    <span className="icon major fa-cloud" />
    <br/><br/><br/>
    <h1 className="white">Inventory&nbsp;
      <span className="red">OS</span>
    </h1>
    <h3 className="dark-grey">Inventory Made Modern</h3>
    <div className="white">All your business assets, all in one place.
    </div>
    <br/>
    <ul className="actions">
      <li>
      <Button variant="contained" color="primary">
        Get Started Now for Free
      </Button>
      </li>
    </ul>
    <br/>

  </header>
)};

export default TopHeaderContainer
