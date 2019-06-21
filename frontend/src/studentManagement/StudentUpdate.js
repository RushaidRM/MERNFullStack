import React, { Component } from "react";
import axios from "axios";

class StudentUpdate extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeInstructorName = this.onChangeInstructorName.bind(this);
    //  this.onChangeYear = this.onChangeYear.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      studentName: "",
      instructorName: ""
      //     year: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/student/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          studentName: response.data.studentName,
          instructorName: response.data.instructorName
          //        year: response.data.year
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeStudentName(e) {
    this.setState({
      studentName: e.target.value
    });
  }

  onChangeInstructorName(e) {
    this.setState({
      instructorName: e.target.value
    });
  }

  // onChangeYear(e) {
  //   this.setState({
  //     year: e.target.value
  //   });
  // }

  onSubmit(e) {
    e.preventDefault();
    const updatedStudent = {
      studentName: this.state.studentName,
      instructorName: this.state.instructorName
      //      year: this.state.year
    };

    axios
      .post(
        "http://localhost:4000/api/student/update/" +
          this.props.match.params.id,
        updatedStudent
      )
      .then(res => console.log(res.data));

    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h3> Update Student </h3>{" "}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> Student Name </label>{" "}
            <input
              type="text"
              className="form-control"
              value={this.state.studentName}
              onChange={this.onChangeStudentName}
            />{" "}
          </div>{" "}
          <div className="form-group">
            <label> Instructor Name </label>{" "}
            <input
              type="text"
              className="form-control"
              value={this.state.instructorName}
              onChange={this.onChangeInstructorName}
            />{" "}
          </div>{" "}
          <div className="form-group">
            {" "}
            {/* <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="year"
                                id="year1"
                                value="year1"
                                checked={this.state.year === "Year 01"}
                                onChange={this.onChangeYear}
                              />
                              <label className="form-check-label"> Year 01 </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="year"
                                id="year2"
                                value="year2"
                                checked={this.state.year === "Year 02"}
                                onChange={this.onChangeYear}
                              />
                              <label className="form-check-label"> Year 02 </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="year"
                                id="year3"
                                value="year3"
                                checked={this.state.year === "Year 03"}
                                onChange={this.onChangeYear}
                              />
                              <label className="form-check-label"> Year 03 </label>
                            </div> */}
            <br />
            <div className="form-group">
              <input
                type="submit"
                value="Update Student"
                className="btn btn-primary"
              />
            </div>{" "}
          </div>{" "}
        </form>{" "}
      </div>
    );
  }
}

export default StudentUpdate;
