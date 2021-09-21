import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const CourseInfo = (props) => {
  return (
    <div className='show-top-content'>
      <img src={props.photoUrl} className='main-show-img' />
      <div className='show-main-info'>
        <div className='main-info-date'>
          <time className='info-date'>
            <p>{props.dayMonth[1]}</p>
            <p>{props.dayMonth[2]}</p>
          </time>
          {!props.isEnrolled ? (
            <div className='show-wishlist' onClick={props.toggleWishlist}>
              <div className='wishlist-icon'>
                <FontAwesomeIcon
                  icon={faHeart}
                  size='2x'
                  color={props.isWishlisted ? 'orangered' : 'grey'}
                />
              </div>
              <span>{!props.isWishlisted ? 'Wishlist' : 'Wishlisted'}</span>
            </div>
          ) : null}
        </div>
        <div className='main-info-title'>
          <h1>{props.title}</h1>
          <span>{props.location.venue}</span>
        </div>
        <div className='main-info-price'>Free</div>
      </div>
    </div>
  );
}
