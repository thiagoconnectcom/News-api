import React from 'react';

import { Header, Logo } from './styles';
import WebEdia from '../../assets/imgs/logo.png';

import SideBar from '../Menu';

const HeaderC = () => (
  <Header>
    <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
    <Logo src={WebEdia} alt="WebEdia" />
  </Header>
);

export default HeaderC;
