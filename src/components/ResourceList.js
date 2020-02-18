import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Resource from './Resource';

class ResourceList extends React.Component {
    renderList() {
        return this.props.resources.map((resource, i) => {
            return <Resource key={ i } data={ resource } />;
        });
    }

    render() {
        return (
            <div className="resource-list four wide column">
                { this.renderList() }
            </div>
        );
    }
}

ResourceList.propTypes = {
    resources: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return { resources: state.resources };
}

export default connect(mapStateToProps)(ResourceList);