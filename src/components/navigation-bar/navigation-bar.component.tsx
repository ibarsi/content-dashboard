import * as React from 'react';
import { uiConfig } from '../../firebaseconfig';
import * as firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const  logo = require('../../assets/logo-white.svg');

export const NavigationBar = () => (
  <div className="flex h3 pa2 white background-gradient_blue items-center justify-between" style={{flexShrink: 0}}>
    <img src={logo} alt="Bridge logo" className="w3"/>
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
  </div>
);
