import React, { Component } from 'react'
import Profile1 from './Profile/Profile1'
import Profile2 from './Profile/Profile2'
import Profile3 from './Profile/Profile3'

export default class Profile extends Component {
  render() {
    return (
      <>
      <div className='container mt-48 flex justify-between items-center'>
        <Profile1 />
        <Profile3 />
      </div>
      {/* <div className='container lg:mt-10'>

        <Profile3 />
      </div> */}
      </>
    )
  }
}
