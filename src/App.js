import './App.css';
import { Routes, Route } from 'react-router-dom';

import FishProfiles from './components/FishProfiles/FishProfiles';
import NavBar from './components/Nav/NavBar';
import Detail from './components/Detail/Detail';

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
