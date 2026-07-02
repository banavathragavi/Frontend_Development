import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Conact</Link>
      </nav>

    </div>
  );
}

export default App;
