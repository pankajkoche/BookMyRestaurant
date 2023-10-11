import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import {Home,  } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="pt-20">
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resturant/:id' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
