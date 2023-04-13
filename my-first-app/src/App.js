import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Search from './components/Search';
import Albums from './components/Albums';
import Artistes from './components/Articles';
import Genres from './components/Genres';
import Logo from './assets/spotify_logo.png';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { faMusic } from "@fortawesome/free-solid-svg-icons";
// import { faList } from "@fortawesome/free-solid-svg-icons";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './Skeleton.css';
import './App.css';


const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <nav className="navbar">
            <div className="three columns">
              <div className="container bg">
                <div className="row">
                  {/* logo spotify */}
                  <div className="five columns offset-by-five navbar-links">
                    <div className="navbar-header">
                      <img src={Logo} alt="Spotify_logo" className="Logo-spotify" />
                    </div>
                    <ul className="navbar-list">
                      <li className='links'>
                        <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                      </li>
                      <li className='links'>
                        <Link to="/Search" className='links' style={{ textDecoration: 'none' }}>Search</Link>
                      </li>
                      <li className='links'>
                        <Link to="/Albums" className='links' style={{ textDecoration: 'none' }}>Albums</Link>
                      </li>
                      <li className='links'>
                        <Link to="/Artistes" className='links' style={{ textDecoration: 'none' }} >Artistes</Link>
                      </li>
                      <li className='links'>
                        <Link to="/Genres" className='links' style={{ textDecoration: 'none' }}>Genres</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/Albums" element={<Albums />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Artistes" element={<Artistes />} />
            <Route path="/Genres" element={<Genres />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </div>

    </>
  );
}

export default App;