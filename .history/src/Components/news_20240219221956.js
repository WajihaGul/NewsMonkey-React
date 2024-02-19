import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class news extends Component {
    render() {
    return (
      <div>
        This is a news component
        <NewsItem/>
        </div>
      
    )
  }
}

export default news