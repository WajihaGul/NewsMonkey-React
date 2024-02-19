import React, { Component } from 'react'
import NewsItems from './Components./newsItem';


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