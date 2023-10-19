import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import {Home,  Navbar} from './components';

function App() {
  return (
    <> 
      <Navbar />
      <hr className="bg-gradient-to-r from-blue-500 to-green-500 h-1"/>
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resturant/:id' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
