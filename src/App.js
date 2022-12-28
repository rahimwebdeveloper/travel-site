import { Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
    
      <h1>this is rahim </h1>
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
