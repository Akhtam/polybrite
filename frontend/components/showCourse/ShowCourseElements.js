import React from 'react';
import { CourseDescription } from './CourseDescription';
import { CourseInfo } from './CourseInfo';

export const CourseShowElements = (props) => {
  const { course, currUserId, enrolledId, wishlistId } = props;
  const { toggleEnroll, toggleWishlist, handleDelete, handleEdit } = props;
  const isEnrolled = enrolledId !== null ? true : false;
  const isWishlisted = wishlistId !== null ? true : false;

  const {
    title,
    description,
    startDate,
    endDate,
    requirements,
    aboutCreator,
    size,
    photoUrl,
    creatorId,
  } = course ? course : {};
  const dayMonth = new Date(startDate).toDateString().split(' ').slice(0, 3);
  const loctime = new Date(startDate).toLocaleTimeString().split(' ');
  const time = loctime[0].slice(0, 4) + ' ' + loctime[1];

  return (
    <div>
      <header className='show-header'>
        <img src={photoUrl} className='header-show-img' />
      </header>
      <div className='show-content'>
        {/* TOOOOOPPPP */}
        <CourseInfo
          photoUrl={photoUrl}
          dayMonth={dayMonth}
          isEnrolled={isEnrolled}
          isWishlisted={isWishlisted}
          toggleWishlist={toggleWishlist}
          title={title}
          location={location}
        />
        {/* ENROLLLMENT */}
        {currUserId !== creatorId ? (
          <div className='show-button'>
            <div className='show-button-container'>
              <button
                onClick={toggleEnroll}
                className={isEnrolled ? 'enrolled' : ''}
              >
                {isEnrolled !== true ? 'Enroll' : 'Enrolled'}
              </button>
            </div>
          </div>
        ) : null}
        {/* DESCription */}
        <CourseDescription
          description={description}
          location={location}
          dayMonth={dayMonth}
          time={time}
          requirements={requirements}
          aboutCreator={aboutCreator}
        />
        {currUserId && currUserId === creatorId ? (
          <div className='show-button edit-delete'>
            <div className='show-button-container delete'>
              <button onClick={handleDelete}>Delete</button>
            </div>
            <div className='show-button-container edit'>
              <button onClick={handleEdit}>Edit</button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
