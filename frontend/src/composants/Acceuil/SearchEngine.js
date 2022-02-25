import React from 'react';
import '../../index.css';
import { searchic } from '../img/search_ic';
import './searchengine.css';


class SearchEngine extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }
  
  render() {
    return (
      <div className="SearchEngine-container">
        <input className="search-engine" type="text" placeholder="Search ..."/>
      </div>
    );
  }
}

export default SearchEngine