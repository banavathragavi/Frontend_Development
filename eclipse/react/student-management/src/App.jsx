

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const students = [
  { name: "Ariya", age: 20,"grade": "A" },
  { name: "Asmita", age: 19,"grade": "S" },
]
function App() {
  return (
    <div className='App'>

      <table>
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Grade</th>
        </thead>
        <tbody>
          {students.map((s) =>
            <tr>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.grade}</td>
              {/* <td><button>Edit</button> <button>Delete</button></td> */}
            </tr>
          )}
        </tbody>
      </table>


    </div>
  );
}










{/* {/* <div>
         <nav className="p-2">
          <a href="/dashboard" className="btn text-light">Home</a>
          <a href="/editstu" className="btn text-light">Add Student</a>
          <a href="/viewstu" className="btn text-light">View Student</a>
          <a href="/logout" className="btn text-light">Logout</a>
        </nav> 
      </div>
      <br />
      <br /> }
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Branch</th>
            <th>CGPA</th>
            <th>Action</th>
          </tr>
        </thead>
      
      </table>
    </div>
  ); */}




{/* //const [count, setCount] = useState(0)
  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
} */}

export default App
