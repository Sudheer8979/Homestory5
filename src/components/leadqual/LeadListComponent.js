import React from 'react';
import { connect } from 'react-redux';
import DrawerWithHeader from '../drawer/Drawer';
import FooterComponent from '../Footer/Footer';
import '../../styles/argon.min.css';
class LeadListComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
