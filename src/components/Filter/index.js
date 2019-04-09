import React, { Component } from 'react';
import './Filter.scss'

class Filter extends Component {

    render() { 
        const { onKeySearch, userSearch } = this.props;

        return ( 
            <div className="app__filter-item">
            <label htmlFor="input" className="input">
              <input
                className="app__filter-name"
                placeholder="Search for your furniture"
                type="text"
                onChange={onKeySearch}
                value={userSearch}
              />
            </label>
          </div>
    

         );
    }
}
 
export default Filter;