import React from 'react'
import { useFormik } from 'formik';

function UserEdit() {
    let formik = useFormik({
        initialValues: {
          name: "",
          position: "",
          office: "",
          age: 0,
          startdate: "",
          salary: 0,
        },
        onSubmit: values => {
        alert("form submited")
        },
      });
    


  return (
    <>
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">User Form</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Name</label>
              <input
                type={"text"}
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input
                type={"text"}
                name="position"
                onChange={formik.handleChange}
                value={formik.values.position}
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label>Office</label>
              <input
                type={"text"}
                name="office"
                onChange={formik.handleChange}
                value={formik.values.office}
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label>Age</label>
              <input
                type={"number"}
                name="age"
                onChange={formik.handleChange}
                value={formik.values.age}
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label>Start date</label>
              <input
                type={"date"}
                name="startdate"
                onChange={formik.handleChange}
                value={formik.values.startdate}
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label>Salary</label>
              <input
                type={"number"}
                name="salary"
                onChange={formik.handleChange}
                value={formik.values.salary}
                className="form-control"
              />
            </div>
            <div className="col-lg-6 mt-3">
              <input type={"submit"} className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}



export default UserEdit