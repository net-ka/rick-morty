import React, { Fragment } from 'react';

import './styles/reset.scss';
import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';

const App = ( {children} ) => {
    return (
      <Fragment>
        <Header />
        <body>
          {children}
        </body>
        <Footer />
      </Fragment>
    );
}

export default App;
