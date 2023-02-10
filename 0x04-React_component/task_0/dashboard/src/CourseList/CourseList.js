import React from "react";
import CourseListRow from "./CourseListRow";
import "./CourseList.css"
import PropTypes from 'prop-types';
import CourseShape from "./CourseShape";

function CourseList({ listCourses }) {
    return (
        <div className="App-body">
            <table id="courseList">
                <thead>
                    <CourseListRow textFirstCell="Available courses" isHeader={true} />
                    <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
                </thead>
                <tbody>
                    {listCourses.length === 0 && (
                        <CourseListRow textFirstCell="No course available yet" isHeader={false} />
                    )}
                    {listCourses.map((course) => (
                        <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
  };

CourseList.defaultProps = {
    listCourses: [],
};

export default CourseList;