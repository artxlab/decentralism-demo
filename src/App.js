import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from './pages/components/Account';
import Play from './pages/Play';
import About from './pages/About';
import PlayerGuide from './pages/PlayerGuide';
//import logo from './styles/assets/logo.svg';
import './styles/scss/App.css';
import './styles/scss/header.scss';
import './styles/scss/shared.scss';
import './styles/scss/spacing.scss';

const App =() => (
    <Router>
      <div className='artx-gradient-bg pt-5'>
        <div className='position-relative'>
          <nav className="navbar navbar-expand-lg artx-header py-3 position-fixed w-100">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
              <i className="fas fa-bars artx-type-twf text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="menu">
              <ul className='navbar-nav mr-auto'>
                  <li className='nav-item mr-5'><a className='nav-link artx-type-twf' href='/decentralism-demo/'>Game</a></li>
                  <li className='nav-item mr-5'><a className='nav-link artx-type-twf' href='/decentralism-demo/about'>ARTX</a></li>
                  <li className='nav-item mr-5'><a className='nav-link artx-type-twf' href='/decentralism-demo/community'>Community</a></li>
                  <li className='nav-item mr-5'><a className='nav-link artx-type-twf' href='/decentralism-demo/auction-guide'>Auction Guide</a></li>
              </ul>
            </div>
            <Account/>
          </nav>
        </div>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Play} />
        <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
        <Route path={process.env.PUBLIC_URL + '/auction-guide'} component={PlayerGuide} />
      </div>
    </Router>
);

export default App;
