import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import "./tempStyles.css";

import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { Redirect, NavLink } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useRoutes, A} from "hookrouter";
import routes from "./components/sRoutes";
import NoPageFound from "./components/sNoPageFound";

//kentiko kontent & gatsbyjs
//import HeaderSection from "./components/HeaderSection";

// S class
import ContactContainer from "./components/sContactContainer";
import CardContainer from "./components/sCardContainer";
import CardContainerFullWidth from "./components/sCardContainerTextOnly";
import FeatureContainer from "./components/sFeatureContainer";
import Pricing from "./components/sPricing";
import PricingContainer from "./components/sPricingContainer";
import FooterContainer from "./components/sFooterContainer";

import TopHeaderContainer from "./components/sTopHeaderContainer";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

// import Layout from './components/layout';
// import Section from './components/Section';
//import HeaderSection from "./components/HeaderSection";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


function App() {
  const routeResult = useRoutes(routes);
  const classes = useStyles();

  return (
    <div className="App">
      <TopHeaderContainer/>

      <CardContainerFullWidth
        className='section-fullWidth bg-grey'
        img='./Capture1.PNG'
        title='Best In Class'
        description='Inventory OS is the future.'>
        </CardContainerFullWidth>

        <CardContainerFullWidth
          className='section-fullWidth bg-grey'
          img='./Capture1.PNG'
          title='Available anytime, rain or shine'
          description='Cloud base platform is here to enable your business.'>
          </CardContainerFullWidth>


     <PricingContainer/>


        <FeatureContainer/>


      <FooterContainer/>
    </div>
  );
}


export default App;




// 33333333333

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         Edit v0.1
//         <br/>
//         Edit v0.2
//       </header>
//     </div>
//   );
// }
//
// export default App;
