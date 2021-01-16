import React, { Component } from "react";
import rdmrecords from "./rdmrecords.json";
import PropTypes from 'prop-types';

export class Fair extends Component {

    render() {
        //todo: map data
        const data = this.props
        
        return (
            <div>
                <h1>WIP</h1>
                <p>{data.access.access_right}</p>
            </div>
        );
    }
}

// todo: check and inform the user if type does not match
Fair.propTypes = {
    record: PropTypes.object,
};

// set default value
Fair.defaultProps = {
    record: { ...rdmrecords }
};