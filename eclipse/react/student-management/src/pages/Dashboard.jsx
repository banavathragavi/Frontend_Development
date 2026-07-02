import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dashboard</h1>

      <Link to="/addstudent">
        <button>Add Student</button>
      </Link>

      <Link to="/viewstudents">
        <button style={{ marginLeft: "20px" }}>
          View Students
        </button>
      </Link>
    </div>
  );
}

export default Dashboard;