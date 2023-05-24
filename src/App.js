import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Historic from './components/Historic';
// import Places from './components/Places';
import Place from './components/Place';

function App() {
    return (
  
     <Router> 
      <div className="Top"> 
      <marquee>Hyderabad, Telangana, India</marquee>
      {/* <div className="Nav1 bg-black"><b></b></div> */}
      <div className="header bg-black">
         
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <Link class="navbar-brand text-light text-left"><img src="/Gallery/Logo.png" alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
              <Link className="nav-link active text-light" aria-current="page" to="/Home" >Home</Link>
              <Link className="nav-link text-light" to="/About">About</Link>
              <Link className="nav-link text-light" to="/Historic">Historic</Link>
              {/* <Link className="nav-link text-light" to="/Places">Places</Link> */}
              <Link className="nav-link text-light" to="/Place">Place</Link>
            </div>
            </div>
        </div>
      </nav></div>
      </div> 
      <br/><br/><br/> 
      <body background="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/09/15144355/Untitled-design-2-4-1600x900.jpg">
     
     <Routes>
      
          <Route extract path='/Home' element={<Home />}></Route>
          <Route extract path='/About' element={<About />}></Route>
          <Route extract path='/Historic' element={<Historic />}></Route>
          {/* <Route extract path='/Places' element={<Places />}></Route> */}
          <Route extract path='/Place' element={<Place />}></Route>
      
       </Routes>
        </body>
       
          
        
         
        </Router>
       


 );
    }
export  default App;





    