import React, { Component } from 'react';

class Course extends Component {
    render() {
        // This is for decoding the URL and converting the string to object
        const searchPath = decodeURI(this.props.location.search);
        const queryObj = {};
        searchPath.substring(1, searchPath.length).split('&').map(query => {
            const splittedQuery = query.split('=');
            queryObj[splittedQuery[0]] = splittedQuery[1];
        });

        const title = queryObj.title || this.props.match.params.title;
        const id = queryObj.id || this.props.match.params.id;


        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {id}</p>
            </div>
        );
    }
}

export default Course;