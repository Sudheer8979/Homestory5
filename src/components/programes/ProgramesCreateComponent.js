import React from 'react';
import { connect } from 'react-redux';
import DrawerWithHeader from '../drawer/Drawer';
import FooterComponent from '../Footer/Footer';
import hashHistory from '../../app.js';
import '../../styles/argon.min.css';
import { PostPartners } from '../../actions/partners/PartnersActions';


class ProgramesCreateComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      programeName: '',
      errorMessage: '',
      
      checked:false,
      hours: '',
      miniute: '',
      days: '',
      oneTime:false,
      programe: '',
      partner: ''

    };
  }
  handlePorgmesCreate = () => {
    if (!this.state.programeName.trim()) {
      this.setState({ errorMessage: 'Program name is Required' });
    } else {
      var partnerObj = {
        programeName: this.state.programeName
        
      }
     this.props.PostPartners(partnerObj, function (resObj) {
       console.log(JSON.stringify(resObj))
        hashHistory.push('/job/creates');

      });
    }
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
                  <h1 className="d-inline-block mb-0">Program Create</h1>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="create-admin-users">
          <div className="container-fluid">
            <div className="mb-2">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="row">
                     <div className="col-md-3">
                        <div className="form-group">
                          <label className="required">Program Name </label>
                          <input type="text" className="form-control" placeholder="Program name" maxLength='100' value={this.state.programeName} onChange={() => this.setState({ programeName: event.target.value, errorMessage: ' ' })} />

                        </div>
                      </div>
                      </div>
                      
                  </form>
                  {/* <div className="mb-3"><h3>Location</h3></div> */}
                  <form>

                    <div className='row'>
                      <div className='container-fluid'>
                        <label className='label-control' style={{ color: 'red' }}>{this.state.errorMessage}</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="update ml-auto mr-auto">
                        <button type="button" onClick={() => hashHistory.push('/jobs')} className="btn btn-danger btn-round">Back</button>
                        <button type="button" onClick={this.handlePorgmesCreate} className="btn btn-primary btn-round">Create Program</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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
  PostPartners: (body, cb) => dispatch(PostPartners(body, cb))

});

export default connect(
  mapStateToProps,
  mapDistachToProps,
)(ProgramesCreateComponent);
