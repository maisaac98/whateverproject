import './App.css';
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/landing-page/landing-page.component';
import Home from './components/home/home.component';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LandingPage/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
  );
}

export default App;
