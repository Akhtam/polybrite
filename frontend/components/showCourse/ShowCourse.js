import React, { useState, useEffect } from 'react';
import { CourseShowElements } from './ShowCourseElements';

export const ShowCourse = (props) => {
  const [location, setLocation] = useState({});
  const [enrolledId, setEnrolledId] = useState(null);
  const [wishlistId, setWishlistId] = useState(null);
  console.log(props);
  useEffect(() => {
    props
      .fetchCourse(props.match.params.courseId)
      .then((res) => {
        setLocation({
          location: JSON.parse(res.course.location),
        });
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    props.fetchEnrollments().then(() => setEnrolledId(props.enrolledId));
  }, [props.enrolledId]);
  useEffect(() => {
    props.fetchWishlists().then(() => setWishlistId(props.wishlistId));
  }, [props.wishlistId]);

  const toggleEnroll = (e) => {
    e.preventDefault();
    const { course, currUserId } = props;
    if (!currUserId) {
      alert('Please Login');
      return;
    }
    const enrollmentForm = {
      course_id: course.id,
      student_id: currUserId,
    };

    if (e.target.innerHTML === 'Enroll') {
      if (wishlistId) {
        props.removeWishlist(wishlistId);
      }
      props.createEnrollment(enrollmentForm);
    } else {
      props.removeEnrollment(enrolledId);
    }
  };

  const toggleWishlist = (e) => {
    e.preventDefault();
    const { course, currUserId } = props;
    if (!currUserId) {
      alert('Please Login');
      return;
    }
    const wishlistForm = {
      course_id: course.id,
      student_id: currUserId,
    };
    if (e.currentTarget.lastChild.innerHTML === 'Wishlist') {
      props.createWishlist(wishlistForm);
    } else {
      props.removeWishlist(wishlistId);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    props.history.push(`/courses/${props.course.id}/edit`);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteCourse(props.course.id).then((res) => {
      props.history.push(`/`);
    });
  };

  return (
    <CourseShowElements
      course={props.course}
      currUserId={props.currUserId}
      enrolledId={enrolledId}
      wishlistId={wishlistId}
      toggleEnroll={toggleEnroll}
      toggleWishlist={toggleWishlist}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
};
