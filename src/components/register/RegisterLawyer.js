import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { registerLawyer } from "../../actions/register";

class RegisterLawyer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      expertise: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onImageChange = (e) => {
    this.setState({ ...this.state, image: e.target.files[0] });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { image, ...lawyer } = this.state;
    this.props.registerLawyer(lawyer, image);
    this.setState({
      image: null,
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      expertise: "",
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
                  id="first_name"
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
                  id="last_name"
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
                  id="email"
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
                  id="phone"
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
                  name="expertise"
                  id="expertise"
                  type="text"
                  className="validate"
                  value={this.state.expertise}
                />
                <label htmlFor="expertise">Expertise</label>
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
  registerLawyer,
})(RegisterLawyer);
