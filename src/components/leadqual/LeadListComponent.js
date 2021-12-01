import React from 'react';
import moment from 'moment'
import { connect } from 'react-redux';
import { t } from 'ttag';
import Spinner from 'react-bootstrap/Spinner';
import noDataImg from '../../images/no-data.png';
import DrawerWithHeader from '../drawer/Drawer';
import FooterComponent from '../Footer/Footer';
import '../../styles/argon.min.css';
class LeadListComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      adUsersList :[
        {
        "sNo":"1","uuId":"2554",
        "name":"HSBC","email":"hscbc@gmail.com","mobileNumber":"9550012366","Created Date":" 2021-10-28"},
        {
        "sNo":"2","uuId":"2556",
        "name":"AXIs","email":"axis@gmail.com","mobileNumber":"9550012377","Created Date":" 2021-10-28"}]
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
                  <h6 className="h2 d-inline-block mb-0">LeadQual List</h6>
                  <nav aria-label="breadcrumb" className="d-md-inline-block ml-md-4">
                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                      <li className="breadcrumb-item"><a href="" onClick={this.handleHomePage}><i className="fas fa-home"></i></a></li>
                      <li className="breadcrumb-item active" aria-current="page">LeadQual List</li>
                    </ol>
                  </nav>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="admin-users-list">
          <div className="container-fluid">
            
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
)(LeadListComponent);
