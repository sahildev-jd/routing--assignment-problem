import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Courses.css';
class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    onCourseClick = (course) => {
        // path parameters
        // this.props.history.push(`/course/${course.id}/${course.title}`);

        // Query parameters
        // this.props.history.push(`/course?id=${course.id}&title=${course.title}`);
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return (
                                <NavLink
                                    to={`/course?id=${course.id}&title=${course.title}`}
                                    key={course.id}
                                >
                                    <article
                                        className="Course"
                                        // This is not reqd with NavLink
                                        // onClick={() => this.onCourseClick(course)}
                                    >
                                        {course.title}
                                    </article>;
                                </NavLink>
                            );
                        })
                    }
                </section>
            </div>
        );
    }
}

export default Courses;