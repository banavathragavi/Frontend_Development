import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const students = [
    { name: "cvr", age: 20, grade: "S" },
    { name: "cvr123", age: 22, grade: "A" }
  ];

  return (
    <div>
      <h1>Welcome to Count App...</h1>

      <h3>Count: {count}</h3>

      <button onClick={incrementCount}>
        Count Me ✌️
      </button>

      <br /><br />

      <h2>Student Details</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;