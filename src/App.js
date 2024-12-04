import Home from './pages/Home';
import Notes from './pages/Notes';
import CreateNote from './pages/CreateNote';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (<Router>
    <Routes>
      <Route path="/" element={ <Home /> } />  
      <Route path="/login" element={ <Login />} />
      <Route path="/signup" element={ <SignUp />} />
      <Route path="/notes">
        <Route index element={<Notes />} />
        <Route path="create" element={<CreateNote />} />
      </Route>
    </Routes>
  </Router>)


}

export default App;
