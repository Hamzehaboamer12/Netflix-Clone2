import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router';

import Home from './components/Home/Home';
import movelist from './components/MovieList/MovieList';
// import  Navbar  from './components/Navbar/Navbar';

function App() {
  return (
    <div>
    
      <Routes>
        {/* <Switch> */}
          <Route path='/' exact  element={<Home/>} />
          <Route path='/trending’' exact element={<movelist/>} />
        {/* </Switch> */}
      </Routes>
    </div>
  );
}

export default App;