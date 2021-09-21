import React from 'react'

export const CourseDescription = (props) => {
  return (
    <>
    <div className='main-description'>
    <div className='mm-description'>
      <div className='description'>
        <div className='desc-content'>
          <h1>About Course</h1>
          <span>{props.description}</span>
        </div>
      </div>
      <div className='date-loc-content'>
        <h3>Date And Time</h3>
        <div className='day-time'>
          {props.dayMonth.join(' ')} - {props.time}
        </div>
        <h3>Location</h3>
        <div className='location'>{props.location.city}</div>
        <div className='location'>{props.location.venue}</div>
      </div>
    </div>
    <hr className='show-hr' />
  </div>

  <div className='show-more-info'>
    <div className='ar-header'>
      <h1>Requirements</h1>
    </div>
    <div className='ar-content'>{props.requirements}</div>
    <div className='ar-header'>
      <h1>About Instructor</h1>
    </div>
    <div className='ar-content'>{props.aboutCreator}</div>
    <hr className='show-hr' />
  </div>
  </>
  )
}
