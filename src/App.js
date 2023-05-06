import './App.css';
import { Routes, Route } from 'react-router-dom';

import FishProfiles from './components/FishProfiles/FishProfiles';
import NavBar from '../src/components/Nav/NavBar'
import Detail from '../src/components/Detail/Detail';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<FishProfiles />} />
        <Route path="/profiles/:id" element={<Detail />} />
      </Routes>

    </>
  );
}

export default App;
