import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function AddStudent() {
  return (

    <div className="form-container">
      <nav className="p-2 bg-dark">
        <a href="dashboard.html" className="btn text-light">Home</a>
        <a href="editstu.html" className="btn text-light">Add Student</a>
        <a href="viewstu.html" className="btn text-light">View Student</a>
        <a href="logout.html" className="btn text-light">Logout</a>
      </nav>
      <div className='container'>
        <h2 className="text-center mb-4">Enter Student Details</h2>

        <form >

          <div className='mb-3'>
            <label className='form-label'>Name</label>

            <input type="text" id="username" maxlength="8" className='form-control' placeholder="Enter name" />

            <br />
            <label className='form-label'>Roll Number</label>
            <input type="text" className='form-control' id="rollno" required placeholder="Enter roll no" />
            <br />

            <label className='form-label'>Branch</label>
            <input type="text" className='form-control' id="branch" required placeholder="Enter branch" />

            <br />
            <label className='form-label'>CGPA</label>
            <input type="text" className='form-control' id="text" required placeholder="Enter cgpa" />

            <br />

            <button className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditStudents;