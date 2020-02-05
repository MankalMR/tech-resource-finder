import React from 'react';
import PropTypes from 'prop-types';

const resource = ({ data, onSelection }) => {
    return (
        <div className="resource ui list">
            <div className="item" onClick={ () => onSelection(data) }>
                <img className="ui avatar image" src={ data.gender === 'M' ? '/img/male.png': '/img/female.png' } alt="avatar"/>
                <div className="content">
                <p className="header">{ data.name }</p>
                <div className="description">{ data.location }</div>
                </div>
            </div>
        </div>
    );
}

resource.propTypes = {
    data: PropTypes.object.isRequired,
    onSelection: PropTypes.func.isRequired
}

export default resource;