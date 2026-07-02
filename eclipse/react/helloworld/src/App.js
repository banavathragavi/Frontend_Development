import './App.css';
import { useState } from 'react';

let istudents = [
  { name: "cvr", age: 20, grade: "S" },
  { name: "cvr123", age: 27, grade: "A" },
  { name: "sita", age: 23, grade: "S" }
];
function App() {
  let [students, setStudents] = useState(istudents);
  let [editIndex, setEditIndex] = useState(null);
  let [formData, setFormData] = useState({name: "",age: "",grade: ""});
  let [search, setSearch] = useState("");
  let [ascending, setAscending] = useState(true);

  const handleDelete = (i) => {
    const updatedStudents = students.filter((s, index) => index !== i);
    setStudents(updatedStudents);
  };

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  const handleAdd = () => {
    setStudents([...students, formData]);
    setFormData({name: "",age: "",grade: ""});
  };

  const handleEdit = (i) => {
    setEditIndex(i);
    setFormData(students[i]);
  };

  const handleUpdate = () => {
    const updatedStudents = students.map((s, i) =>i === editIndex ? formData : s);
    setStudents(updatedStudents);
    setEditIndex(null);
    setFormData({name: "",age: "",grade: ""});
  };

  const sortedStudents = [...students].filter((s) =>s.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>ascending? a.name.localeCompare(b.name): b.name.localeCompare(a.name));

  return (
    <div className="App">
      <input className="form-control" placeholder="Type to search" value={search} onChange={(e) => setSearch(e.target.value)}/>

      <div className="form">
        <h2>{editIndex === null? "Add Student": "Edit Student"}</h2>

        <input className="form-control m-2" name="name" value={formData.name} onChange={handleChange}/>

        <input className="form-control m-2" name="age" value={formData.age} onChange={handleChange}/>

        <input
          className="form-control m-2" name="grade" value={formData.grade} onChange={handleChange}/>

        {editIndex === null ? (
          <button
            className="btn btn-primary"
            onClick={handleAdd}
          >
            Add Student
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={handleUpdate}
          >
            Update Student
          </button>
        )}
      </div>

      <h2>Student List</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => setAscending(!ascending)}
            >
              Name {ascending ? "↑" : "↓"}
            </th>
            <th>Age</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {sortedStudents.map((s, index) => (
            <tr key={index}>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.grade}</td>
              <td>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default App;