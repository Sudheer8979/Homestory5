import React from 'react';
import moment from 'moment'
import { connect } from 'react-redux';
import hashHistory from '../../app.js';
import DrawerWithHeader from '../drawer/Drawer';
import Pagination from 'react-js-pagination';
import '../../styles/argon.min.css';
import DatePicker from 'react-datepicker';
import { GetJobsList, ViewJobsList, GetProgramesList, ViewDupJobsList } from '../../actions/partners/PartnersActions';

class UsersJobListComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            jobsList: '',
            jobsCount: '',
            programesList: '',
            startDate: '',
            endDate: '',
            programeName: '',
            partnerName: '',
            jobStatus: '',
            activePage: '1'

        };
        this.handleInputChange = this.handleInputChange.bind(this);

    }
    handleClear = () => {
        this.setState({
            startDate: '',
            endDate: '',
            programeName: '',
            partnerName: '',
            jobStatus: '',
            activePage: '1'

        })
        let getObj = {
            startDate: '',
            endDate: '',
            programeName: '',
            partnerName: '',
            jobStatus: '',
            activePage: '1'
        };
        const _this = this;
        this.props.GetJobsList(getObj, (resObj) => {
            _this.setState({
                jobsList: resObj.statusResult.usersJobList,
                jobsCount: resObj.statusResult.usersCount
            });
        });
    }

    handleInputChange() {
        var sDate = moment.utc(this.state.startDate).valueOf();
        var startDateTimeNumber = moment(sDate).format('YYYY-MM-DD').valueOf();
        var endDateNum = moment.utc(this.state.endDate).valueOf();
        var endDateTimeNumber = moment(endDateNum).format('YYYY-MM-DD').valueOf();
        let getObj = {
            startDate: this.state.startDate ? startDateTimeNumber : '',
            endDate: this.state.endDate ? endDateTimeNumber : '',
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

    }
    componentDidMount() {
        let getObj = {
            startDate: '',
            endDate: '',
            programeName: '',
            partnerName: '',
            jobStatus: '',
            activePage: '1'
        };
        const _this = this;

        this.props.GetJobsList(getObj, (resObj) => {
            console.log(JSON.stringify(resObj))
            _this.setState({
                jobsList: resObj.statusResult.usersJobList,
                jobsCount: resObj.statusResult.usersCount
            });
            console.log(JSON.stringify(resObj.statusResult.usersJobList))
        });
        this.props.GetProgramesList((resObj) => {
            _this.setState({ programesList: resObj.statusResult.usersLovList });
        });

    }

    handleCreateJob(event) {
        hashHistory.push('/job/creates');
        event.preventDefault();
    }
    handleViewJobs = (item, event) => {
        this.props.ViewJobsList(item.jobId, (resObj) => {

            hashHistory.push('/leads');



        });
        event.preventDefault();


    }
    handleDupJobs = (item, event) => {
        this.props.ViewDupJobsList(item.jobId, (resObj) => {

            hashHistory.push('/leads');



        });
        event.preventDefault();


    }
    handleChangeDate = (date) => {

        if (date > this.state.endDate) {
            this.setState({
                endDate: date,
                startDate: date,
                errorMessage: ''
            })
        } else {
            this.setState({
                startDate: date,
                errorMessage: ''
            });
        }
    }
    handleChangeEndDate = (date) => {
        this.setState({
            endDate: date,
            errorMessage: ''
        });
    };
    onClickHandlerPagination = pageNumber => {
        var sDate = moment.utc(this.state.startDate).valueOf();
        var startDateTimeNumber = moment(sDate).format('YYYY-MM-DD').valueOf();
        var endDateNum = moment.utc(this.state.endDate).valueOf();
        var endDateTimeNumber = moment(endDateNum).format('YYYY-MM-DD').valueOf();
        this.setState({ activePage: pageNumber });
        let data = {
            activePage: pageNumber,
            startDate: this.state.startDate ? startDateTimeNumber : '',
            endDate: this.state.endDate ? endDateTimeNumber : '',
            programeName: this.state.programeName,
            partnerName: this.state.partnerName,
            jobStatus: this.state.jobStatus
        };
        const _this = this;
        this.props.GetJobsList(data, function (resObj) {
            _this.setState({
                jobsList: resObj.statusResult.usersJobList,
                jobsCount: resObj.statusResult.usersCount
            });

        });
    }


    render() {
        return (
            <div className="main-content" id="panel">
                {/* ------- Navbar --------- */}
                <DrawerWithHeader />
                <div className="header">
                    <div className="container-fluid">
                        <div className="header-body">
                            <div className="row align-items-center" >
                                <div className="col-md-7">
                                    <h6 className="h2 d-inline-block mb-0">Jobs List</h6>
                                    <nav aria-label="breadcrumb" className="d-md-inline-block ml-md-4">
                                        <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                            <li className="breadcrumb-item"><a href="" onClick={this.handleHomePage}><i className="fas fa-home"></i></a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Jobs List</li>
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

                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label className="required">From Date</label>
                                        <DatePicker className="col-md-10" selected={this.state.startDate} maxLength="5" onChange={this.handleChangeDate} />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label className="required">To Date</label>
                                        <DatePicker className="col-md-10" selected={this.state.endDate} maxLength="5" onChange={this.handleChangeEndDate} />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Program Name</label>
                                        <select className="col-md-10" id="exampleFormControlSelect3" value={this.state.programeName} onChange={(event) => (this.setState({ programeName: event.target.value, errorMessage: '' }))}>
                                            <option value=''>Select</option>
                                            <option >All</option>
                                            {this.state.programesList && this.state.programesList.map((data, index) =>
                                                <option key={index} value={data.programeName}>{data.programeName}</option>
                                            )}

                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Partner</label>
                                        <select className="col-md-10" id="exampleFormControlSelect3" value={this.state.partnerName} onChange={(event) => (this.setState({ partnerName: event.target.value, errorMessage: '' }))}>
                                            <option>Select</option>
                                            <option >All</option>
                                            <option>HSBC</option>
                                            <option>ZILLOW</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Job Status</label>
                                        <select className="col-md-10" id="exampleFormControlSelect3" value={this.state.jobStatus} onChange={(event) => (this.setState({ jobStatus: event.target.value, errorMessage: '' }))}>
                                            <option>Select</option>
                                            <option >All</option>
                                            <option>Success</option>
                                            <option>Failed</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="search">
                                        <button className="btn btn-primary" onClick={this.handleInputChange}>
                                            Search
                                        </button>
                                    </div>
                                </div>
                                <div className="clear">
                                    <button className="btn btn-danger" onClick={this.handleClear}>
                                        Clear
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <span className="alert-icon"><i className="ni ni-like-2"></i></span>
                                        <span className="alert-text"><strong>You have {this.state.jobsCount} Jobs</strong> </span>
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                                         <div className="table-responsive">
                                            <table className="table align-items-center table-flush">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th scope="col" className="sort" data-sort="name">Job Id</th>
                                                        <th scope="col" className="sort" data-sort="name">Program Name</th>
                                                        <th scope="col" className="sort" data-sort="name">Partner Name</th>
                                                        <th scope="col" className="sort" data-sort="name">Job Status</th>
                                                        <th scope="col" className="sort" data-sort="name">Count</th>
                                                        <th scope="col" className="sort" data-sort="completion">Dup Count</th>
                                                        <th scope="col" className="sort" data-sort="completion">job Created</th>



                                                    </tr>
                                                </thead>
                                                {this.state.jobsList && this.state.jobsList.map((item, i) =>
                                                    <tbody className="list" key={i}>
                                                        <tr>
                                                            <td className="budget">


                                                                <div className="profile-email">
                                                                    <span style={{ paddingLeft: 20 }}>{item.jobId}</span>
                                                                </div>
                                                            </td>
                                                            <td>{item.programeName}</td>
                                                            <td>{item.partnerName}</td>
                                                            <td>{item.status} </td>
                                                            <td>{item.leadsCount}
                                                                <a onClick={(event) => this.handleViewJobs(item, event)}
                                                                    className="table-action table-action1"
                                                                    data-toggle="tooltip"
                                                                    title="Edit Admin User">
                                                                    <i className="fas fa-eye" />
                                                                </a></td>
                                                            <td>
                                                                {item.dupCount}
                                                                <a onClick={(event) => this.handleDupJobs(item, event)}
                                                                    className="table-action table-action1"
                                                                    data-toggle="tooltip"
                                                                    title="Edit Admin User">
                                                                    <i className="fas fa-eye" />
                                                                </a>

                                                            </td>
                                                            <td>{moment(item.createdAtString).format('MMM DD, YYYY hh:mm:ss:A')} </td>
                                                            
                                                        </tr>
                                                    </tbody>)}
                                            </table>
                                        </div>

                        
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    {this.state.jobsCount > 10
                        ?
                        <div className='text-center'>
                            <div>
                                <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={10}
                                    totalItemsCount={this.state.jobsCount}
                                    pageRangeDisplayed={5}
                                    onChange={this.onClickHandlerPagination}
                                />
                            </div>
                        </div>
                        : null}
                </div>

                <div className="footer-top">
                    <div className="container-fluid">
                        <div className="row">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    LoginReducer: state.LoginReducer

});

const mapDistachToProps = (dispatch) => ({
    GetJobsList: (data, cb) => dispatch(GetJobsList(data, cb)),
    GetProgramesList: (cb) => dispatch(GetProgramesList(cb)),
    ViewJobsList: (jobId, cb) => dispatch(ViewJobsList(jobId, cb)),
    ViewDupJobsList: (jobId, cb) => dispatch(ViewDupJobsList(jobId, cb)),



});

export default connect(
    mapStateToProps,
    mapDistachToProps,
)(UsersJobListComponent);

