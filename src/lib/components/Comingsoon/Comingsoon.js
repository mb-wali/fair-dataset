import React, { Component} from "react";
import PropTypes from 'prop-types';

export class Comingsoon extends Component  {

    render() {
        const { name, email } = this.props;
        return <h1>Hello, {name} + {email} </h1>;
      }
      
}

Comingsoon.propTypes = {
    email: PropTypes.string,
    name: PropTypes.string.isRequired,
  };
  
  Comingsoon.defaultProps = {
    name: 'Admin',
    email: 'email.test.com',
  };
