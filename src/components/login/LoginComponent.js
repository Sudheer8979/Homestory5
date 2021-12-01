import React from 'react';
import { connect } from 'react-redux';
import hashHistory from '../../app.js';
import FooterHomeComponent from '../Footer/FooterHome';
import '../../styles/login.css';
import '../../styles/nucleo.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PostAdminUserLogin } from '../../actions/login/LoginActions';
import { GoogleLogin } from 'react-google-login';

import logo from '../../images/logo.png';


class LoginComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      userID: '',
      password: '',
      userErrorMessage: '',
      passwordErrorMessage: '',
      adUsersList: [{
        "sessionId": "11ad6013-faaa-4560-bf69-13b31bd06c70",
        "profile": {
          "id": 72821,
          "aggregateId": "19b63106-d66f-46cd-be51-73b6d8e9af32",
          "partnerId": "e6ff474f-ecdf-4b6e-b45c-97b86914468a",
          "role": "SERVICE",
          "roles": [
            "SERVICE"
          ],
          "firstName": "Test",
          "lastName": "Service",
          "email": "murali+sandbox@ssbitsolutions.com",
          "phone": "",
          "phones": [
            {
              "phoneType": "office",
              "phoneNumber": ""
            }
          ],
          "children": []
        }
      }
      ]
    };
  }
  onSuccess = (res) => {
    console.log(res)
    toast.success('Login Successfully');

    setTimeout(() => {
      hashHistory.push('/homePage');
    }, 1000);


  }
  handleHomepage = (e) => {
    if (!this.state.userID.trim()) {
      this.setState({ userErrorMessage: "User ID or Mobile Number is required" });
    } else if (!this.state.password) {
      this.setState({ passwordErrorMessage: "Please fill the required field" });
    } else {
      const loginObj = {
        userID: this.state.userID,
        password: this.state.password
      };
      if (this.state.userID === "murali+sandbox@ssbitsolutions.com") {
        toast.success('Login Successfully');
        setTimeout(() => {
          hashHistory.push('/homePage');
        }, 1000);
        console.log("sessionId=================", this.state.adUsersList[0].sessionId)
      } else {
        toast.warning('Invalid Login Credentials');

      }
      this.props.PostAdminUserLogin(loginObj, (resObj) => {


      })

    }
  }

  render() {
    return (
      <div>
        <div className="main-content signin-main" id="panel">
          {/* ------- Navbar --------- */}
          <nav className="sticky-top navbar navbar-top navbar-expand navbar-dark border-bottom" >
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="login-logo">
                  <img src={logo} id="navbarSupportedContent" width={210} />
                </div>
              </div>
            </div>
          </nav>
          <div className='login-page my-6'>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-7">
                  <div className="card border-0 mb-0">
                    <div className="card-header bg-transparent">
                      <h2 className="text-center mb-0">Sign in </h2>
                    </div>
                    <div className="card-body px-lg-4 py-lg-4">
                      <form role="form">
                        <div className="form-group mb-1">
                          <div className="input-group input-group-merge input-group-alternative">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="ni ni-email-83" /></span>
                            </div>
                            <input className="form-control" placeholder="User ID / Mobile Number" type="text" value={this.state.userID} onChange={(e) => this.setState({ userID: e.target.value, userErrorMessage: '' })} onKeyPress={this.handleEnterPressed} />
                          </div>
                        </div>
                        <label className="text-danger">{this.state.userErrorMessage}</label>
                        <div className="form-group mb-1">
                          <div className="input-group input-group-merge input-group-alternative">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
                            </div>
                            <input className="form-control" placeholder="Password" type="password" onChange={(e) => this.setState({ password: e.target.value, passwordErrorMessage: '' })} value={this.state.password} onKeyPress={this.handleEnterPressed} />
                          </div>
                        </div>
                        <label className="text-danger">{this.state.passwordErrorMessage}</label>
                        <div className="row mt-3">
                          <div className="col-6">
                            <button type="button" onClick={this.handleHomepage} className="btn btn-primary">Sign in</button>
                            <GoogleLogin
                              clientId="979448315995-0ru17bmjgvt7cl53vldobsjaj2ueomak.apps.googleusercontent.com"
                              buttonText="Login"
                              onSuccess={this.onSuccess}
                              onFailure={this.onFailure}
                              cookiePolicy={'single_host_origin'}
                            />
                          </div>

                        </div>

                      </form>
                    </div>
                  </div>

                  <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <FooterHomeComponent /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  LoginReducer: state.LoginReducer
});

const mapDistachToProps = (dispatch) => ({
  PostAdminUserLogin: (loginObj, cb) => dispatch(PostAdminUserLogin(loginObj, cb)),
});

export default connect(mapStateToProps, mapDistachToProps)(LoginComponent);
