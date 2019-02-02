import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params:{
        query: term
      },
      headers: {
        Authorization: 'Client-ID 55159597b7e9752aec40d67a4b1b3cf0c51f4b18d4e60988b9089700304539f8'
      }
    });
  }


  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }

};

export default App;