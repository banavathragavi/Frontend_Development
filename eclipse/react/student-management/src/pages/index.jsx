import { Link } from "react-router-dom";

function Index() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Student Management System</h1>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <Link to="/register">
        <button style={{ marginLeft: "20px" }}>Register</button>
      </Link>
    </div>
  );
}

export default Index;