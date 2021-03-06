import React, { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import * as serviceWorker from './serviceWorker';

// ** Import custom components for redux**
import { Provider } from 'react-redux';
import store from './store/index';
import App from './components/app';

// Import custom Components

import Default from './components/dashboard/defaultCompo/default';
import Ecommerce from './components/dashboard/ecommerce';
import University from './components/dashboard/university';
import CryptoComponent from './components/dashboard/crypto/cryptoComponent';
import Project from './components/dashboard/project/project';

// sample page
import Samplepage from './components/sample/samplepage';
import SupportTicket from './components/support-ticket/supportTicket';

//firebase Auth
function Root() {
  useEffect(() => {
    const layout = localStorage.getItem('layout_version');
    document.body.classList.add(layout);
  }, []);
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter basename={'/'}>
          <ScrollContext>
            <Switch>
              <Fragment>
                <App>
                  {/* dashboard menu */}
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/`}
                    component={Default}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/dashboard/default`}
                    component={Default}
                  />
                </App>
              </Fragment>
            </Switch>
          </ScrollContext>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
