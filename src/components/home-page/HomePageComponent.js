import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css';
import DrawerWithHeader from '../../components/drawer/Drawer';
import dashboard from '../../images/dashboard.png';
import 'react-toastify/dist/ReactToastify.css';

import FooterComponent from '../../components/Footer/Footer';
import './style.scss';
import '../../styles/argon.min.css';
import '../../styles/nucleo.css';
import { GetJobsList, GetDashBoardLeadsList, GetDashBoardProgramList} from '../../actions/partners/PartnersActions';

class HomePage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
       startDate: '',
       endDate: '',
       programeName: '',
       partnerName: '',
       jobStatus: '',
       activePage: '1',
       jobsCount: '',
       jobsList: '',
       usersleadsList: '',
       usersLeadsCount: '',
       usersPogramsCount: '',
       usersPogramsList: ''                

    };

  }
  componentDidMount() {
    var startDateTimeNumber = moment.utc().format('YYYY-MM-DD').valueOf();
    var endDateTimeNumber = moment.utc().format('YYYY-MM-DD').valueOf();
    let getObj = {
      startDate:  startDateTimeNumber ,
      endDate:  endDateTimeNumber ,
      programeName: this.state.programeName,
      partnerName: this.state.partnerName,
      jobStatus: this.state.jobStatus,
      activePage: this.state.activePage
      
    };
    const _this = this;
    this.props.GetJobsList(getObj, (resObj) => {
      _this.setState({
        jobsList: resObj.statusResult.usersJobList,
        jobsCount: resObj.statusResult.usersCount
      });
    });

     let leadsObj = {
      startDate:  startDateTimeNumber,
      endDate:  endDateTimeNumber,
      activePage: this.state.activePage
     };
     this.props.GetDashBoardLeadsList(leadsObj, (resObj) => {
      this.setState({
        usersleadsList: resObj.statusResult.usersleadsList,
        usersLeadsCount: resObj.statusResult.usersLeadsCount
      });
    });

    let pogramsObj = {
      startDate:  startDateTimeNumber,
      endDate:  endDateTimeNumber,
      activePage: this.state.activePage
     };
     this.props.GetDashBoardProgramList(pogramsObj, (resObj) => {
      this.setState({
        usersPogramsList: resObj.statusResult.usersPogramsList,
        usersPogramsCount: resObj.statusResult.usersPogramsCount
      });
    });



  }



  render() {

    return (
      <div className="main-content" id="panel">
        <DrawerWithHeader />
        <div className="header">
        </div>
          <div class="card1">
          <div className="card-body">
         <div class="values">
           <div class="val-box">
             <i class="fas fa-briefcase"></i>
             <div>
               <h3>Number Of Jobs</h3>
               <span>{this.state.jobsCount}</span>
             </div>
           </div>
           <div class="val-box">
             <i class="fas fa-folder-open"></i>
             <div>
               <h3>Number Of Records</h3>
               <span>{this.state.usersLeadsCount}</span>
             </div>
           </div>
           <div class="val-box">
             <i class="fas fa-users"></i>
             <div>
               <h3>Partners</h3>
               <span>2</span>
             </div>
           </div>
           <div class="val-box">
             <i class="fas fa-bug"></i>
             <div>
               <h3>Programs</h3>
               <span>{this.state.usersPogramsCount}</span>
             </div>
           </div>
           </div>
           </div>
         </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDistachToProps = (dispatch) => ({
  GetJobsList: (data, cb) => dispatch(GetJobsList(data, cb)),
  GetDashBoardLeadsList: (data, cb) => dispatch(GetDashBoardLeadsList(data, cb)),
  GetDashBoardProgramList: (data, cb) => dispatch(GetDashBoardProgramList(data, cb)),

});

export default connect(mapStateToProps, mapDistachToProps)(HomePage);
