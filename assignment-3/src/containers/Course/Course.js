import React, { Component } from 'react';

class Course extends Component {
  state = {
    courseTitle: ''
  };

  componentDidMount() {
    this.getQueryParams();
  }

  componentDidUpdate() {
    this.getQueryParams();
  }

  getQueryParams() {
    const query = new URLSearchParams(this.props.location.search);
    Array.from(query.entries()).map(param => {
      if (this.state.courseTitle !== param[1]) {
        this.setState({ courseTitle: param[1] });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.courseTitle}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
