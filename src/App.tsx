import { useContext } from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Private } from './Pages/Private';
import { RequireAuth } from './Contexts/Auth/RequireAuth';
import { AuthContext } from './Contexts/Auth/AuthContext';

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();


  async function handleLogout () {
    await auth.signOut();
    navigate('/');

  }
  return (
    <div className="App">
      <header>
        <h1>Header do Site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Privada</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button> }
          
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/private' element={<RequireAuth><Private /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
