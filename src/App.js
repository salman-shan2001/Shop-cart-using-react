import logo from './logo.svg';
import './App.css';
import AddShop from './component/AddShop';
import SearchLap from './component/SearchLap';
import DeleteLap from './component/DeleteLap';
import ViewLap from './component/ViewLap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>

        <Route path='/' element={<AddShop/>}/>
        <Route path='/SearchLap' element={<SearchLap/>}/>
        <Route path='/DeleteLap' element={<DeleteLap/>}/>
        <Route path='/ViewLap' element={<ViewLap/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
