

import { call, put, select, takeLatest } from 'redux-saga/effects';

import * as ApiCallManager from '../../server/ApiCallManager';
import config from '../../../public/config.json';

// const getLoginUserState = state => state.LoginReducer;
const emptyObj = {};
const snr = { statusCode: '777', statusMessage: 'Server not responding' };

//--- Begin: Saga main Action Watcher generator function
function* WatchUserLoginSaga() {
  yield takeLatest('POST_ADMIN_USER_LOGIN', workerUserLogin);
  yield takeLatest('POST_PARTNERS', workerPartnersLogin);
  yield takeLatest('GET_PROGRAMES_LIST', workerProgramesList);
  yield takeLatest('POST_JOB_LIST', workerJobsList);
  yield takeLatest('POST_JOB', workerJobsCreate);
  yield takeLatest('GET_JOB_LIST', workerGetJobsList);
  yield takeLatest('GET_DASHBOARD_LEADS_LIST', workerGetDashboardLeadsList);
  yield takeLatest('GET_DASHBOARD_PROGRAM_LIST', workerGetDashboardProgramsList);
  
  yield takeLatest('VIEW_JOB', workerViewJobsList);
  yield takeLatest('VIEW_DUP_JOBS', workerViewDupJobsList);
  yield takeLatest('LEAD_QUAL_INSERT', workerLeadQualJobsList);



}
export default WatchUserLoginSaga;
//--- End: Saga main Action Watcher generator function

function* workerUserLogin(action) {
  const apiTimeOut = setTimeout(() => {
    action.callback(snr);
  }, 30000);
  try {
    let reqBody = { email: action.loginObj.userID, password: action.loginObj.password };
    let obj = { url: config.apiADUrl + config.postLoginAPI, body: reqBody };
    //console.log("Login url",JSON.stringify(obj))
    let resObj = yield call(ApiCallManager.postCall, obj);

    yield put({ type: 'SET_ADMIN_USER_AUTH_DATA', data: resObj });
    clearTimeout(apiTimeOut);
    action.callback(resObj);
  } catch (error) {
    console.error('Error occured in WatchUserLoginSaga.js, at method workerUserLogin: ' + error);
    clearTimeout(apiTimeOut);
    action.callback(emptyObj);
  }
}
function* workerPartnersLogin(action) {
  const apiTimeOut = setTimeout(() => {
    action.callback(snr);
  }, 30000);
  try {
    let reqBody = { programeName: action.partnerObj.programeName };
    let obj = { url: config.apiEuUrl + config.partnersAPI, body: reqBody };
    console.log("url",JSON.stringify(obj))

    let resObj = yield call(ApiCallManager.postCall, obj);

    yield put({ type: 'SET_ADMIN_USER_AUTH_DATA', data: resObj });
    clearTimeout(apiTimeOut);
    action.callback(resObj);
  } catch (error) {
    console.error('Error occured in WatchUserLoginSaga.js, at method workerPartnersLogin: ' + error);
    clearTimeout(apiTimeOut);
    action.callback(emptyObj);
  }
}
function* workerProgramesList(action) {
  const apiTimeOut = setTimeout(() => {
    action.callback(snr);
  }, 30000);
  try {
    let obj = { url: config.apiEuUrl + config.pogramesListAPI };
    let resObj = yield call(ApiCallManager.getCall, obj);
    yield put({ type: 'GET_PROGRAMES_LIST_RES', data: resObj });
    clearTimeout(apiTimeOut);
    action.callback(resObj);
  } catch (error) {
    console.error('Error occured in WatchUserLoginSaga.js, at method workerProgramesList: ' + error);
    clearTimeout(apiTimeOut);
    action.callback(emptyObj);
  }
}

function* workerJobsList(action) {
  const apiTimeOut = setTimeout(() => {
    action.callback(snr);
  }, 30000);
  try {
    console.log(action.partnerName)
    let reqBody = { data: action.data, jobId: action.jobId, id: action.id, programeName: action.programeName, partnerName: action.partnerName };
    let obj = { url: config.apiEuUrl + config.jobCreateAPI, body: reqBody };
   /// console.log("gopppppppppp",JSON.stringify(obj))
    let resObj = yield call(ApiCallManager.postCall, obj);

    //yield put({ type: 'SET_ADMIN_USER_AUTH_DATA', data: resObj });
    clearTimeout(apiTimeOut);
    action.callback(resObj);
  } catch (error) {
    console.error('Error occured in WatchUserLoginSaga.js, at method workerUserLogin: ' + error);
    clearTimeout(apiTimeOut);
    action.callback(emptyObj);
  }
}


function* workerJobsCreate(action) {
  const apiTimeOut = setTimeout(() => {
    action.callback(snr);
  }, 30000);
  try {
    let reqBody = { data: action.data };
    let obj = { url: config.apiEuUrl + config.jobInsertAPI, body: reqBody };
    let resObj = yield call(ApiCallManager.postCall, obj);

    //yield put({ type: 'SET_ADMIN_USER_AUTH_DATA', data: resObj });
    clearTimeout(apiTimeOut);
    action.callback(resObj);
  } catch (error) {
    console.error('Error occured in WatchUserLoginSaga.js, at method workerUserLogin: ' + error);
    clearTimeout(apiTimeOut);
    action.callback(emptyObj);
  }
}
function* workerGetJobsList(action) {
  const apiTimeOut = setTimeout(() => {
    action.callback(snr);
  }, 30000);
  try {
    //console.log("fffffffff",action.startDate)
    // if (action.startDate && action.endDate && action.programeName && action.partnerName && action.jobStatus) {

    //   var obj = {
    //     url: config.apiEuUrl + config.getJobListAPI + action.startDate + "/"+ action.endDate + '/' + action.programeName
    //       + '/' + action.partnerName + '/' + action.jobStatus
    //   };
    //   //console.log(JSON.stringify(obj))
    // } else if (action.programeName) {
    //   var obj = {
    //     url: config.apiEuUrl + config.getJobListAPI + action.programeName
    //   };
    // } else if (action.partnerName) {
    //   var obj = {
    //     url: config.apiEuUrl + config.getJobListAPI + action.partnerName
    //   };

    // } else if (action.jobStatus) {
    //   var obj = {
    //     url: config.apiEuUrl + config.getJobListAPI + action.jobStatus
    //   };

    // } else {
    //   var obj = {
    //     url: config.apiEuUrl + config.getJobListAPI 
    //   };

    // }

    var body ={
     startDate : action.startDate ? action.startDate : '',
     endDate : action.endDate ? action.endDate : '',
     programeName : action.programeName ?  action.programeName: '',
    partnerName : action.partnerName ? action.partnerName: '',
     jobStatus : action.jobStatus ?  action.jobStatus : '',
     activePage : action.activePage ?  action.activePage : ''
    }
    

    var obj = {
      url: config.apiEuUrl + config.getJobListAPI, body: body
      
      //   };
        };
        //console.log(JSON.stringify(obj))

    let resObj = yield call(ApiCallManager.postCall, obj);
    //yield put({ type: 'GET_WAREHOUSES_LIST_RES', data: resObj});
    clearTimeout(apiTimeOut);
    action.callback(resObj);
  } catch (error) {
    console.error('Error occured in WatchUserLoginSaga.js, at method workerJobList: ' + error);
    clearTimeout(apiTimeOut);
    action.callback(emptyObj);
  }
}
function* workerGetDashboardLeadsList(action) {
  const apiTimeOut = setTimeout(() => {
    action.callback(snr);
  }, 30000);
  try {
    
    var body ={
     startDate : action.startDate ? action.startDate : '',
     endDate : action.endDate ? action.endDate : '',
     
     activePage : action.activePage ?  action.activePage : ''
    }
    

    var obj = {
      url: config.apiEuUrl + config.getDashboardLeadsListAPI, body: body
      
      //   };
        };
        console.log(JSON.stringify(obj))

    let resObj = yield call(ApiCallManager.postCall, obj);
    //yield put({ type: 'GET_WAREHOUSES_LIST_RES', data: resObj});
    clearTimeout(apiTimeOut);
    action.callback(resObj);
  } catch (error) {
    console.error('Error occured in WatchUserLoginSaga.js, at method workerJobList: ' + error);
    clearTimeout(apiTimeOut);
    action.callback(emptyObj);
  }
}
function* workerGetDashboardProgramsList(action) {
  const apiTimeOut = setTimeout(() => {
    action.callback(snr);
  }, 30000);
  try {
    
    var body ={
     startDate : action.startDate ? action.startDate : '',
     endDate : action.endDate ? action.endDate : '',
     
     activePage : action.activePage ?  action.activePage : ''
    }
    

    var obj = {
      url: config.apiEuUrl + config.getDashboardPogramesListAPI, body: body
      
      //   };
        };
        console.log(JSON.stringify(obj))

    let resObj = yield call(ApiCallManager.postCall, obj);
    //yield put({ type: 'GET_WAREHOUSES_LIST_RES', data: resObj});
    clearTimeout(apiTimeOut);
    action.callback(resObj);
  } catch (error) {
    console.error('Error occured in WatchUserLoginSaga.js, at method workerJobList: ' + error);
    clearTimeout(apiTimeOut);
    action.callback(emptyObj);
  }
}
function* workerViewJobsList(action) {
  const apiTimeOut = setTimeout(() => {
    action.callback(snr);
  }, 30000);
  try {
    let obj = { url: config.apiEuUrl + config.ViewJobListAPI + action.jobId };
    let resObj = yield call(ApiCallManager.getCall, obj);
    //console.log("vvvvvvvvvvvvvvvvvvv",JSON.stringify(resObj))
    yield put({ type: 'GET_VIEW_JOB_LIST_RES', data: resObj });
    clearTimeout(apiTimeOut);
    action.callback(resObj);
  } catch (error) {
    console.error('Error occured in WatchUserLoginSaga.js, at method workerViewJobsList: ' + error);
    clearTimeout(apiTimeOut);
    action.callback(emptyObj);
  }
}
function* workerViewDupJobsList(action) {
  const apiTimeOut = setTimeout(() => {
    action.callback(snr);
  }, 30000);
  try {
    let obj = { url: config.apiEuUrl + config.ViewJobDUpListAPI + action.jobId };
    let resObj = yield call(ApiCallManager.getCall, obj);
    //console.log("vvvvvvvvvvvvvvvvvvv",JSON.stringify(resObj))
    yield put({ type: 'GET_VIEW_JOB_LIST_RES', data: resObj });
    clearTimeout(apiTimeOut);
    action.callback(resObj);
  } catch (error) {
    console.error('Error occured in WatchUserLoginSaga.js, at method workerViewJobsList: ' + error);
    clearTimeout(apiTimeOut);
    action.callback(emptyObj);
  }
}
function* workerLeadQualJobsList(action) {
  const apiTimeOut = setTimeout(() => {
    action.callback(snr);
  }, 30000);
  try {
    let reqBody = { data: action.data };
    //console.log("ddddddddddddddddd", JSON.stringify(reqBody.data))
    let obj = { url: config.LeadCallInertAPI, body: reqBody };
    let resObj = yield call(ApiCallManager.postCall, obj);
    //console.log("=============", JSON.stringify(resObj))

    yield put({ type: 'SET_ADMIN_USER_AUTH_DATA', data: resObj });
    clearTimeout(apiTimeOut);
    action.callback(resObj);
  } catch (error) {
    console.error('Error occured in WatchUserLoginSaga.js, at method workerLeadQualJobsList: ' + error);
    clearTimeout(apiTimeOut);
    action.callback(emptyObj);
  }
}

