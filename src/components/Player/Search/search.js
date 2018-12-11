import React, { Component } from 'react';



class Search extends Component {
    render() {
      return (
        <div className="search-wrapper">
          <input type="text"/>
          <input type="button" value="Search"/>
        </div>
      );
    }
  }
 
export default Search;