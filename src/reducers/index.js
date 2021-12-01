
import { combineReducers } from 'redux';

import PartnersReducer from './partners/PartnersReducer';
import LoginReducer from './login/LoginReducer';

export default combineReducers({
  
  PartnersReducer,
  
  LoginReducer  
});
