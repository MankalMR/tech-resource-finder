import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectResource } from '../actions';

class Resource extends React.Component {
    render() {
        const currResource = this.props.data;
        return (
            <div className="resource ui list">
                <div className="item" onClick={ () => this.props.selectResource(currResource) }>
                    <img className="ui avatar image" src={ currResource.gender === 'M' ? '/img/male.png': '/img/female.png' } alt="avatar"/>
                    <div className="content">
                    <p className="header">{ currResource.name }</p>
                    <div className="description">{ currResource.location }</div>
                    </div>
                </div>
            </div>
        );
    }
}

Resource.propTypes = {
    data: PropTypes.object.isRequired,
    selectResource: PropTypes.func.isRequired
}

export default connect(null, { selectResource })(Resource);