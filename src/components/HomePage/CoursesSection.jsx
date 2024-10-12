import React from 'react';
import '../../styles/HomePage/CoursesSection.css';

const CoursesSection = () => {
  return (
    <section className="courses-section text-center">
      <h2 className="section-title">MORE THAN 180 COURSES, AND AI SYSTEMS... JUST FOR YOU</h2>
      <div className="course-thumbnails">
        <img src="/assets/course1.jpeg" alt="Course Thumbnail" />
        <img src="/assets/course2.jpeg" alt="Course Thumbnail" />
        <img src="/assets/course3.jpeg" alt="Course Thumbnail" />
      </div>
    </section>
  );
};

export default CoursesSection;
