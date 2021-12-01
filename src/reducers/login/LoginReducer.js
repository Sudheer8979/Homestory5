

const initialState = {
  authObj: {},
  allJobsList: '',
  allJobsListCount: '',
  usersLovList: '',
}
  

const LoginReducer = (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case 'GET_VIEW_JOB_LIST_RES':
      if (action.data.statusCode == '0000') {
        newState.allJobsList = action.data.statusResult.usersJobListView;
        newState.allJobsListCount = action.data.statusResult.usersCount;
      } else if (action.data.statusCode == '9997') {
        newState.allJobsList = [];
        newState.allJobsListCount = 0;
      }
      break;
      case 'GET_PROGRAMES_LIST_RES':
      if (action.data.statusCode == '0000') {
        console.log("=============")
        newState.usersLovList = action.data.statusResult.usersLovList;
      } else if (action.data.statusCode == '9997') {
        newState.usersLovList = [];
       }
      break;
    
    
    
  }
  return newState;
};

export default LoginReducer;
