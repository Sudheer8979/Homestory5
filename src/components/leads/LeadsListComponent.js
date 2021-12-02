import React from 'react';
 import { connect } from 'react-redux';
 import { t } from 'ttag';
 import noDataImg from '../../images/no-data.png';
 import hashHistory from '../../app.js';
 import DrawerWithHeader from '../drawer/Drawer';
 import FooterComponent from '../Footer/Footer';
 import '../../styles/argon.min.css';
 import { GetJobsList, ViewJobsList} from '../../actions/partners/PartnersActions';
 class LeadsListComponent extends React.PureComponent {
   constructor(props) {
     super(props);
     this.state = {
        jobsList: '',
        jobsCount: ''

     
      };
     this.handleInputChange = this.handleInputChange.bind(this);
     
   }
  
   handleInputChange() {
     const getObj = {
       activePage: '1',
       searchString: this.state.searchString
     };
     this.props.GetADUsersList(getObj, function (resObj) {
         
      });
   }
   componentDidMount(){
    const _this = this;
    this.props.GetJobsList((resObj) => {
       _this.setState({ jobsList: resObj.statusResult.usersJobList,
      jobsCount:  resObj.statusResult.usersCount });
     });
  }
   
   handleCreateJob(event) {
     hashHistory.push('/job/creates');
     event.preventDefault();
   }
   handleViewJobs =(item, event) => {
    this.props.ViewJobsList(item.jobId, (resObj) => {
    });

   }
   handleHomePage =(event) =>{
    hashHistory.push('/jobs');
    event.preventDefault();


   }
   
   
   
   render() {
    const { allJobsList } = this.props.LoginReducer;
    const { allJobsListCount } = this.props.LoginReducer;
     return (
       <div className="main-content" id="panel">
         {/* ------- Navbar --------- */}
         <DrawerWithHeader />
         <div className="header">
           <div className="container-fluid">
             <div className="header-body">
               <div className="row align-items-center" >
                 <div className="col-md-7">
                   <h6 className="h2 d-inline-block mb-0">Leads List</h6>
                   <nav aria-label="breadcrumb" className="d-md-inline-block ml-md-4">
                     <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                       <li className="breadcrumb-item"><a href="" onClick={this.handleHomePage}><i className="fas fa-home"></i></a></li>
                       <li className="breadcrumb-item active" aria-current="page">Leads List</li>
                     </ol>
                   </nav>
                 </div>
                 <div className="col-md-5 text-right">
                   <a href="" onClick={this.handleCreateJob} className="btn btn-success"><i className="fa fa-plus" /> Create Job</a>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="admin-users-list">
           <div className="container-fluid">
             <div className="mb-2">
               <div className="search-conditions-box">
                 <div className="row">
                   <div className="col-md-10">
                     <div className="form-group">
                       <input
                         type="search"
                         className="form-control"
                         placeholder="Enter Keyword"
                         value={this.state.searchString}
                         onChange={e => { this.setState({ searchString: e.target.value }) }}
                       />
                     </div>
                   </div>
                   <div className="col-md-2">
                     <button className="btn btn-primary" onClick={this.handleInputChange}>
                       Search
                   </button>
                   </div>
                 </div>
               </div>
               <div className="card">
                 <div className="card-body">
                   <div className="alert alert-success alert-dismissible fade show" role="alert">
                     <span className="alert-icon"><i className="ni ni-like-2"></i></span>
                     <span className="alert-text"><strong>You have {allJobsListCount} Jobs</strong> </span>
                     <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                     </button>
                   </div>
                   {allJobsList && allJobsList.length > 0
                     ? <div className="table-responsive">
                       <table className="table align-items-center table-flush">
                         <thead className="thead-light">
                           <tr>
                           
                              <th scope="col" className="sort" data-sort="name">Client</th>
                             <th scope="col" className="sort" data-sort="budget">Programe</th>
                             <th scope="col" className="sort" data-sort="budget">ID</th>
                             <th scope="col" className="sort">Invite date</th>
                             <th scope="col" className="sort" data-sort="completion">Enrolled date</th>
                             <th scope="col" className="sort" data-sort="completion">Client firstname</th>
                             <th scope="col" className="sort" data-sort="completion">Client Lastname</th>
                             <th scope="col" className="sort" data-sort="status">Client email</th>
                             <th scope="col" className="sort" data-sort="completion">Client phone</th>
                             
                             <th scope="col" className="sort" data-sort="completion">purchase location</th>
                             <th scope="col" className="sort" data-sort="completion">Normalized city</th>
                             <th scope="col" className="sort" data-sort="completion">Normalized state</th>
                             <th scope="col" className="sort" data-sort="completion">Normalized zip</th>
                             <th scope="col" className="sort" data-sort="completion">Agent firstname</th>
                             <th scope="col" className="sort" data-sort="completion">Agent Lastname</th>
                             <th scope="col" className="sort" data-sort="status">Agent email</th>
                             <th scope="col" className="sort" data-sort="completion">Agent phone</th>
                             <th scope="col" className="sort" data-sort="completion">Lo firstname</th>
                             <th scope="col" className="sort" data-sort="completion">Lo Lastname</th>
                             <th scope="col" className="sort" data-sort="status">Lo email</th>
                             <th scope="col" className="sort" data-sort="completion">Lo phone</th> 
                             {/* <th /> */}
                           </tr>
                         </thead>
                          {allJobsList && allJobsList.map((item, i) =>
                           <tbody className="list" key={i}>
                             <tr>
                               
                                <td>{item.partnerName}</td>
                                <td>{item.programeName}</td>
                                <td>{item.id} </td>
                               <td><p className="mb-0">{21112021}</p> </td>
                               <td><p className="mb-0"></p></td>
                               <td><p className="mb-0">{item.firstName}</p></td>
                               <td><p className="mb-0">{item.lastName}</p></td>
                               <td><p className="mb-0">{item.email}</p></td>
                               <td><p className="mb-0">{item.phone}</p></td>
                               <td><p className="mb-0">{item.purchaseLocation.title}</p></td>
                               <td><p className="mb-0">{item.sellingAddress}</p></td>
                               <td><p className="mb-0">{item.sellingAddress}</p></td>
                               <td><p className="mb-0">{item.sellingAddress}</p></td>
                               <td><p className="mb-0">{item.currentAssignments.REFERRAL_COORDINATOR.firstName}</p></td>
                               <td><p className="mb-0">{item.currentAssignments.REFERRAL_COORDINATOR.lastName}</p></td>
                               <td><p className="mb-0">{item.currentAssignments.REFERRAL_COORDINATOR.email}</p></td>
                               <td><p className="mb-0">{item.currentAssignments.REFERRAL_COORDINATOR.phone}</p></td>
                               <td><p className="mb-0">{item.currentAssignments.REFERRAL_COORDINATOR.phone}</p></td> 
                               
                             </tr>
                           </tbody>)} 
                       </table>
                     </div>
                       : <div className="no-data">
                         <img src={noDataImg} alt="no data image" />
                         <p>{t`lanCommonLabelNoUsersFound`}</p>
                       </div>
                     
                   }
                 </div>
                 
               </div>
             </div>
           </div>
         </div>
         
         <div className="footer-top">
           <div className="container-fluid">
             <div className="row">
 
             </div>
           </div>
         </div>
         <FooterComponent />
       </div>
     );
   }
 }
 
 const mapStateToProps = (state) => ({
    LoginReducer: state.LoginReducer
 });
 
 const mapDistachToProps = (dispatch) => ({
    GetJobsList: (cb) => dispatch(GetJobsList(cb)),
    ViewJobsList: (jobId, cb) => dispatch(ViewJobsList(jobId, cb))

   
 });
 
 export default connect(
   mapStateToProps,
   mapDistachToProps,
 )(LeadsListComponent);

