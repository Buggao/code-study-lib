import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import MyHeader from './components/MyHeader';
import AboutMe from './pages/AboutMe';
import AddStudent from './pages/AddStudent';
import StudentsPage from './pages/StudentsPage';

function App() {
  return (
    <>
      <MyHeader/>
      <main className="main-content-container h-full">
        <Routes>
          <Route path="/home" element={ <StudentsPage />} />
          <Route path="/about" element={ <AboutMe />} />
          <Route path="/add" element={ <AddStudent />} />
          <Route path="/" element={ <Navigate replace to="/about" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
