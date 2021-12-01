

import React from 'react';
import { connect } from 'react-redux';
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';

import hashHistory from '../../app.js';
import DummyProfilePic from '../../images/user-profile.jpg';
import logo from '../../images/logo.png';

class DrawerWithHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      position: 'left',
      noOverlay: true,
      };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.setNoOverlay = this.setNoOverlay.bind(this);
    this.handleHomePage = this.handleHomePage.bind(this);
   
   
  }

  
  

  onDrawerClose() {
    this.setState({ open: false });
  }

  setPosition(e) {
    this.setState({ position: e.target.value });
  }

  setNoOverlay(e) {
    this.setState({ noOverlay: e.target.checked });
  }

  toggleDrawer() {
    this.setState({ open: !this.state.open });
  }

  closeDrawer() {
    this.setState({ open: false });
  }
  handleHomePage(event) {
    hashHistory.push('/HomePage');
    event.preventDefault();
  }
  handleLogout() {
    localStorage.clear()
    hashHistory.push('/login')
  }

  
  handlePartenersPage =() =>{
    hashHistory.push('/parteners')
    event.preventDefault();

  }
  handleJobsPage =() =>{
    hashHistory.push('/job/creates')
    event.preventDefault();

  }
  handleProgramePage =() =>{
    hashHistory.push('/program/create')

  }
  handleLeadQual =() =>{
    hashHistory.push('/leadqual')

  }
  handleJobsListPage =() =>{
    hashHistory.push('/jobs')

  }
  
  render() {
    return (
      <div>
       
        <ReactDrawer
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}
          noOverlay={this.state.noOverlay}
        >
          <div className="close-drawer">
            <span onClick={this.closeDrawer} className="">
              <i className="fas fa-times" />
            </span>
          </div>
          <nav className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs bg-white" id="sidenav-main">
            <div className="scrollbar-inner">
              <div className="navbar-inner">
                {/* Collapse */}
                <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                  {/* Nav items */}
                  <ul className="navbar-nav">
                    
                      <li className="nav-item">
                        <a className="nav-link active" onClick={this.handleHomePage}>
                          <i className="fas fa-home text-primary" />
                          <span className="nav-link-text">Dashboard</span>
                        </a>
                      </li>
                    
                    <li className="nav-item">
                        <a className="nav-link active" onClick={this.handlePartenersPage}>
                          <i className="fas fa-home text-primary" />
                          <span className="nav-link-text">Partners</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" onClick={this.handleJobsPage}>
                          <i className="fas fa-home text-primary" />
                          <span className="nav-link-text">Create Job</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" onClick={this.handleJobsListPage}>
                          <i className="fas fa-home text-primary" />
                          <span className="nav-link-text">Jobs List</span>
                        </a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link active" onClick={this.handleProgramePage}>
                          <i className="fas fa-home text-primary" />
                          <span className="nav-link-text">Add Program</span>
                        </a>
                      </li>
                      {/* <li className="nav-item">
                      <a className="nav-link active" onClick={this.handleLeadQual}>
                          <i className="fas fa-home text-primary" />
                          <span className="nav-link-text">LeadQual</span>
                        </a>
                      </li> */}
                      {/* <li className="nav-item">
                        <a className="nav-link active" onClick={this.handleReportsPage}>
                          <i className="fas fa-home text-primary" />
                          <span className="nav-link-text">Reports</span>
                        </a>
                      </li> */}
                     </ul>
                  </div>
              </div>
            </div>
          </nav>
        </ReactDrawer>
        
       
        <div className="main-content" id="panel">
          {/* ------- Navbar --------- */}
          <nav className="sticky-top navbar navbar-top navbar-expand navbar-light border-bottom">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="logo-text">
                   <a onClick={this.handleHomePage}><img src={logo} width={160}/></a> 
                </div>
                <div>
                  <button className="leftnavbtn" onClick={this.toggleDrawer} disabled={this.state.open && !this.state.noOverlay}>
                    {!this.state.open ?
                      <span>
                        <i className="fas fa-bars" />
                      </span>
                    : <span>
                        <i className="fas fa-times" />
                      </span>
                    }
                  </button>
                </div>
                {/* Search form */}
                
                <ul className="navbar-nav flex-row mr-auto ml-4 d-none d-md-flex">
                  <li className="nav-item">
                    <a className="nav-link active" onClick={this.handleHomePage}>Dashboard</a>
                  </li>
                </ul>
                {/* Navbar links */}
                
                <ul className="navbar-nav align-items-center ml-auto ml-md-auto">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      
                    </a>
                    <div className="dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden">
                      
                      
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav align-items-center ml-md-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link pr-0"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="media align-items-center">
                        <span className="avatar avatar-sm rounded-circle">
                          <img src={this.state.userIconPath ? this.state.userIconPath : DummyProfilePic} alt="" />
                        </span>
                        <div className="media-body ml-2 d-none d-lg-block">
                          <span className="mb-0 text-sm">
                          </span>
                        </div>
                      </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div className="dropdown-header noti-title">
                        <h6 className="text-overflow m-0">Welcome!</h6>
                      </div>
                      <a
                        onClick={this.handleProfile}
                        className="dropdown-item"
                      >
                        <i className="fas fa-user" />
                        <span>My profile</span>
                      </a>
                      <a href="#!" className="dropdown-item" onClick={this.handleSettings}>
                        <i className="fas fa-cog" />
                        <span>Settings</span>
                      </a>
                      <div className="dropdown-divider" />
                      <a onClick={this.handleLogout} className="dropdown-item">
                        <i className="fas fa-power-off" />
                        <span>Logout</span>
                      </a>
                    </div> 
                    
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};
const mapDistachToProps = (dispatch) => ({
});
export default connect(mapStateToProps, mapDistachToProps)(DrawerWithHeader);
