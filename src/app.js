import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { Router, Route } from 'react-router';
import { createHashHistory } from 'history';
// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import '@babel/polyfill';
import 'sanitize.css/sanitize.css';

import rootReducer from './reducers';
import rootSaga from './sagas';
import './i18n';

// =========== App Url Containers Start =========== //
import HomePage from './containers/home-page';
import LoginPage from './containers/login';

import PartnersList from './containers/partners';
import UsersJobList from './containers/userjobs';
import UserJobCreate from './containers/userjobs/UserJobCreate';
import ProgramesCreate from './containers/programes/ProgramesCreate';
import Leadqual from './containers/leadqual';
import Leads from './containers/leads';


// =========== App Url Containers End =========== //

import { registerOpenSans } from './init';


registerOpenSans();
const hashHistory = createHashHistory();

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, middleware);
sagaMiddleware.run(rootSaga);

const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route component={LoginPage} exact path='/' />
        <Route component={LoginPage} exact path='/login' />
        <Route component={HomePage} path='/homePage' />
        <Route component={PartnersList} path='/parteners' />
        <Route component={UsersJobList} path='/jobs' />
        <Route component={UserJobCreate} path='/job/creates' />
        <Route component={ProgramesCreate} path='/program/create' />
        <Route component={Leadqual} path='/leadqual' />
        <Route component={Leads} path='/leads'/>
        
        

        
      </Router>
    </Provider>,
    MOUNT_NODE
  );
};

// This code is excluded from production bundle
if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./containers/home-page'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

// ========================================================
// Go!
// ========================================================
render();
export default hashHistory;
