import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
function ViewStudents(){
    let isStudents=[
    {name:"Ariya",roll:573,"branch":"fsd","cgpa":"A"},
    {name:"Asmita",roll:574,"branch":"sap","cgpa":"S"},
]
let [students,setStudents]=useState(isStudents)
let [formData,setFormData]=useState({name:"",roll:"",branch:"",cgpa:""})
const handleDelete=(i)=>{
  const updatedStudents=students.filter((s,index)=>index!=i) 
  setStudents(updatedStudents)
}
const handleAdd=()=>{
 setStudents([...students,formData])
 setFormData({name:"",roll:"",branch:"",cgpa:""})
}
const handleChange=(e)=>{
  // alert(e.target.name+" "+e.target.rollno+" "e.target.branch+" "+e.target.cgpa)
  setFormData({...formData,[e.target.name]:e.target.value}

  )
}

    return (<div className='App'>
         {/* <nav className="p-2 bg-dark">
      <a href="dashboard.html" className="btn text-light">Home</a>
      <a href="editstu.html" className="btn text-light">Add Student</a>
      <a href="viewstu.html" className="btn text-light">View Student</a>
      <a href="logout.html" className="btn text-light">Logout</a>
    </nav> */}
    <br/>
    <div className='form'>
      <h2 >AddStudent</h2>
        <input name='name' className="form-control m-2" placeholder="Name" value={formData.name} onChange={handleChange}/>
        <input name='roll' className="form-control m-2"  placeholder="RollNo" value={formData.roll} onChange={handleChange}/>
        <input name='branch' className="form-control m-2" placeholder="Branch"  value={formData.branch} onChange={handleChange}/>
        <input name='cgpa' className="form-control m-2" placeholder="CGPA"  value={formData.cgpa}  onChange={handleChange}/>

        <button class="btn btn-success m-2" onClick={()=>handleAdd()}> 
            Add Student
        </button>

    </div>
    <br/>
    <hr/>
    <h2>Student List</h2>
    <table className="table table-bordered m-2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Branch</th>
            <th>CGPA</th>
            <th>Action</th>
          </tr>
          </thead>
           <tbody>
            {students.map((s,index)=>//any updations can be dipslyed like the modifications can be reloaded
            <tr>
            <td>{s.name}</td>
            <td>{s.roll}</td>
            <td>{s.branch}</td>
            <td>{s.cgpa}</td>
            <td><button className=' btn btn-success m-2'>Edit</button>
            <button className='btn btn-danger' onClick={()=>handleDelete(index)}>Delete</button></td>
            </tr>


            )}
            </tbody>
         
      </table>
    </div>
    )
}

export default ViewStudents;