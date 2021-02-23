import React, { Component } from "react";
import axios from "axios";
class DeleteStudent extends Component {
  state = {};
  componentDidMount() {
    axios
      .delete(
        `http://localhost:9091/student-api/students/${this.props.match.params.id}`
      )
      .then(
        (result) => {
          alert("Student is deleted.");
          this.props.history.push("/students");
        },
        (error) => {
          alert("Student is not deleted.");
        }
      );
  }
  render() {
    return <p>Processing...</p>;
  }
}

export default DeleteStudent;