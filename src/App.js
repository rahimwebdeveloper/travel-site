import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>this is rahim </h1>
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
