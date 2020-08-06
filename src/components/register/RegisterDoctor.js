import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { registerDoctor } from "../../actions/register";

class RegisterDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      specialization: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onImageChange = (e) => {
    this.setState({ ...this.state, image: e.target.files[0] });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { image, ...doctor } = this.state;
    this.props.registerDoctor(doctor, image);
    this.setState({
      image: null,
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      specialization: "",
    });
  };

  render() {
    return (
      <Fragment>
        <div className="row">
          <form className="col s12 m6 push-m3" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="file-field input-field col s6">
                <div className="btn">
                  <span>Browse</span>
                  <input type="file" onChange={this.onImageChange} />
                </div>

                <div className="file-path-wrapper">
                  <input
                    className="file-path validate"
                    type="text"
                    placeholder="Upload a profile photo"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  onChange={this.onChange}
                  name="first_name"
                  type="text"
                  className="validate"
                  value={this.state.first_name}
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  onChange={this.onChange}
                  name="last_name"
                  type="text"
                  className="validate"
                  value={this.state.last_name}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="email"
                  type="email"
                  className="validate"
                  value={this.state.email}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="phone"
                  type="text"
                  className="validate"
                  value={this.state.phone}
                />
                <label htmlFor="phone">Phone</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="specialization"
                  type="text"
                  className="validate"
                  value={this.state.specialization}
                />
                <label htmlFor="specialization">Specialization</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <button className="btn waves-effect waves-light" type="submit">
                  Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  registerDoctor,
})(RegisterDoctor);
