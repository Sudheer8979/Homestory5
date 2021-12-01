import { call, put, takeLatest } from 'redux-saga/effects';

import * as ApiCallManager from '../../server/ApiCallManager';
import config from '../../../public/config.json';

const emptyObj = {};
const snr = { statusCode: '777', statusMessage: 'Server not responding' };

//--- Begin: Saga main Action Watcher generator function
function* WatchPartnersSaga() {
 yield takeLatest('GET_JOBS_LIST', workerJobsList);
  
}
export default WatchPartnersSaga;
//--- End: Saga main Action Watcher generator function

function* workerJobsList(action) {
  const apiTimeOut = setTimeout(() => {
    action.callback(snr);
  }, 30000);
  try {
  
  } catch (error) {
    console.error('Error occured in WatchADUsersSaga.js, at method workerGetADUsersList: ' + error);
    clearTimeout(apiTimeOut);
    action.callback(emptyObj);
  }
}

