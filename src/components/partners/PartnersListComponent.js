import React from 'react';
import moment from 'moment'
import { connect } from 'react-redux';
import { t } from 'ttag';
import Spinner from 'react-bootstrap/Spinner';
import noDataImg from '../../images/no-data.png';
import DrawerWithHeader from '../drawer/Drawer';
import FooterComponent from '../Footer/Footer';
import '../../styles/argon.min.css';
class PartnersListComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      adUsersList :[
        {
        "sNo":"1","uuId":"2554",
        "name":"HSBC","email":"hscbc@gmail.com","mobileNumber":"9550012366","Created Date":" 2021-10-28"},
        {
        "sNo":"2","uuId":"2556",
        "name":"ZILLOW","email":"axis@gmail.com","mobileNumber":"9550012377","Created Date":" 2021-10-28"}]
    };
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
                  <h6 className="h2 d-inline-block mb-0">Partners List</h6>
                  <nav aria-label="breadcrumb" className="d-md-inline-block ml-md-4">
                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                      <li className="breadcrumb-item"><a href="" onClick={this.handleHomePage}><i className="fas fa-home"></i></a></li>
                      <li className="breadcrumb-item active" aria-current="page">Partners List</li>
                    </ol>
                  </nav>
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
                  <div className="sea">
                  <button className="btn btn-primary" onClick={this.handleInputChange}>
                     Search
                  </button>
                  </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <span className="alert-icon"><i className="ni ni-like-2"></i></span>
                    <span className="alert-text"><strong>You have 2 Partners</strong> </span>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  {this.state.adUsersList 
                    ? <div className="table-responsive">
                      <table className="table align-items-center table-flush">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col" className="sort" data-sort="name">S.NO</th>
                            <th scope="col" className="sort" data-sort="budget">UUID</th>
                            <th scope="col" className="sort" data-sort="status">Partner Name</th>
                            <th scope="col" className="sort" data-sort="completion">Email</th>
                            <th scope="col" className="sort">Phone</th>
                            <th scope="col" className="sort" data-sort="completion">Created Date</th>
                            
                            <th />
                          </tr>
                        </thead>
                         {this.state.adUsersList.map((item, i) =>
                          <tbody className="list" key={i}>
                            <tr>
                              <td className="budget">
                                
                                
                                <div className="profile-email">
                                  <span style={{ paddingLeft: 20 }}>{item.sNo ? item.sNo : ''}</span>
                                </div>
                              </td>
                              <td>{item.uuId}</td>
                              <td>{item.name} </td>
                              <td><p className="mb-0">{item.email}</p> </td>
                              <td><p className="mb-0">{item.mobileNumber}</p></td>
                              <td>
                                <div className="cell">
                                  <div className="date">{moment(item.createdAt).format('MMM DD, YYYY')}</div>
                                </div>
                              </td>
                              <td>{item.userStatus}</td>
                              <td>
                               
                                
                              </td>
                            </tr>
                          </tbody>)} 
                      </table>
                    </div>
                    : this.state.loading
                      ? <div className='text-center'><Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                      </Spinner></div>
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
 });

const mapDistachToProps = (dispatch) => ({
 });

export default connect(
  mapStateToProps,
  mapDistachToProps,
)(PartnersListComponent);
