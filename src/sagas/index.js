

import { all, fork } from 'redux-saga/effects';

import WatchPartnersSaga from './partners/WatchPartnersSaga';
import WatchUserLoginSaga from './login/WatchUserLoginSaga';


function* RootSaga() {
  yield all([
    
    fork(WatchPartnersSaga),
    fork(WatchUserLoginSaga),
  
  ]);
}

export default RootSaga;
