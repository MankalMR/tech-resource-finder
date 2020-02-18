import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class ResourceDetails extends React.Component {

    render () {
        return (
            <aside className="resource-details ui twelve wide column">
                <div className="card">
                    <div className="image">
                        <img src={ this.props.activeResource.gender === 'M' ? '/img/male_l.png': '/img/female_l.png' } alt="visual identification" />
                    </div>
                    <div className="content">
                        <div className="header">{ this.props.activeResource.name }</div>
                        <div className="meta">
                            <p>Designation</p>
                        </div>
                        <div className="description">
                            { this.props.activeResource.location }
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                            Year Joined
                        </span>
                        <span>
                            <i className="user icon"></i>
                            Additional Info
                        </span>
                    </div>
                </div>
            </aside>
        );
    }
}

ResourceDetails.propTypes = {
    activeResource: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return { activeResource: state.selectedResource || state.resources[0] };
}

export default connect(mapStateToProps)(ResourceDetails);