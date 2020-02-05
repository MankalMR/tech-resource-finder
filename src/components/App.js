import React from 'react';
import SearchBar from './SearchBar';
import ResourceList from './ResourceList';
import ResourceDetails from './ResourceDetails';

class App extends React.Component {
    // temporary mock list, this needs to replaced with DB API call when ready
    resourceList = [
        {
            name: 'Manohar Mankala',
            location: 'Columbus, OH',
            gender: 'M'
        },
        {
            name: 'Priyanka Chetty',
            location: 'Columbus, OH',
            gender: 'F'
        },
        {
            name: 'Lijash Mohammed',
            location: 'Orange County, CA',
            gender: 'M'
        },
        {
            name: 'Lin Joseph',
            location: 'Austin, TX',
            gender: 'M'
        },
        {
            name: 'Nikhil Narula',
            location: 'Dallas, TX',
            gender: 'M'
        }
    ];
    state = {
        resources: [],
        selectedResource: this.resourceList[0]
    };

    componentDidMount () {
        this.onSearchSubmit('test');
    };

    onResourceSelection = resource => {
        this.setState({ selectedResource: resource });
    };

    onSearchSubmit = searchTerm => {
        // TODO: fetch the list from the DB API
        this.setState({
            resources: this.resourceList,
            selectedResource: this.resourceList[0]
        })
    };

    render() {
        return (
            <section>
                <SearchBar onSearchSubmit={ this.onSearchSubmit }/>
                <section className="content ui grid row" >
                    <ResourceList resourceList={ this.state.resources } onSelection={ this.onResourceSelection } />
                    <ResourceDetails activeResource ={ this.state.selectedResource } />
                </section>
            </section>
        );
    }
}

export default App;