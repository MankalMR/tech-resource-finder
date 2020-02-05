import React from 'react';

class SearchBar extends React.Component {
    state = { searchTerm: '' };

    onInputChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        // execute props callback with searchTerm
        this.props.onSearchSubmit(this.state.searchTerm);
    }

    render () {
        return (
            <header className="search-bar ui segment">
                <form onSubmit={ this.onFormSubmit } className="ui form">
                    <div className="field">
                        <input
                            id="search-bar-input"
                            type="text"
                            value={ this.state.searchTerm }
                            placeholder="Find Resource by name, location, expertise..."
                            onChange={ this.onInputChange }
                        />
                    </div>
                </form>
            </header>
        );
    }
}

export default SearchBar;