import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItems from './Components./NewsItems';


export class news extends Component {
   render() {
    return (
      <div>This is news
        <NewsItems/>
      </div>
         
    )
  }
}

export default news