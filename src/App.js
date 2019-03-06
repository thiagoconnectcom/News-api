import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Reset from './assets/styles/Reset';
import Base from './assets/styles/Base';
import Colors from './assets/styles/Colors';
import Fonts from './assets/styles/Fonts';
import './components/Menu/styles.css';

import Destaques from './pages/Destaques';
import Brasil from './pages/Brasil';
import Eua from './pages/Eua';
import Argentina from './pages/Argentina';
import Franca from './pages/Franca';
import Menu from '../src/assets/imgs/menu.svg';

const App = () => (
  <Fragment>
    <Reset />
    <Colors />
    <Fonts />
    <Base />
    <Header />
    <Router>
      <Fragment>
        <nav className="none">
          <ul className="ul">
            <li className="li">
              <Link className="active" to="/">
                NOTÍCIAS EM DESTAQUE
              </Link>
            </li>
            <li className="li">
              <Link to="/Brasil">NOTÍCIAS DO BRASIL</Link>
            </li>
            <li className="li">
              <Link to="/Eua">NOTÍCIAS DO EUA</Link>
            </li>
            <li className="li">
              <Link to="/Argentina">NOTÍCIAS DA ARGENTINA</Link>
            </li>
            <li className="li">
              <Link to="/Franca">NOTÍCIAS DA FRANÇA</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Destaques} />
        <Route path="/Brasil" component={Brasil} />
        <Route path="/Eua" component={Eua} />
        <Route path="/Argentina" component={Argentina} />
        <Route path="/Franca" component={Franca} />
      </Fragment>
    </Router>

    <Footer />
  </Fragment>
);

export default App;
