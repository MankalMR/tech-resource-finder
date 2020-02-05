import React from 'react';
import PropTypes from 'prop-types';
import Resource from './Resource';

const resourceList = ({ resourceList, onSelection }) => {
    const resources = resourceList.map((resource, i) => {
        return <Resource key={ i } data={ resource } onSelection={ onSelection } />;
    });

    return (
        <div className="resource-list four wide column">
            { resources }
        </div>
    );
};

resourceList.propTypes = {
    resourceList: PropTypes.object.isRequired,
    onSelection: PropTypes.func.isRequired
}

export default resourceList;