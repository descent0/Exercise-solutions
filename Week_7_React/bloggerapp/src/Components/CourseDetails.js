
import React from 'react';

const CourseDetails = ({ courses }) => {
  if (!courses || courses.length === 0) return <p>No courses listed</p>;

  return (
    <>
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course.cname}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </>
  );
};

export default CourseDetails;
