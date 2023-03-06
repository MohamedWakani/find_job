import React, { Component } from 'react'
import Profile1 from './Profile/Profile1'
import Profile2 from './Profile/Profile2'

export default class Profile extends Component {
  render() {
    return (
      <div className='container my-48'>
        <Profile1 />
        <Profile2 />
      </div>
    )
  }
}
