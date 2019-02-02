import React from 'react';

class SearchBar extends React.Component {
    state = { term: 'Search here...' };

    // This is to prevent the browser from refreshing the page whenever user presses ENTER key.
    onFormSubmit= (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })
                        } />
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;