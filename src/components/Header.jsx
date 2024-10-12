// Header.jsx
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg px-5">
      <a className="navbar-brand" href="/">
        <img src="/assets/header_logo.png" alt="Youniverse Logo" width="50" className="mr-2" />
        YOUNIVERSE EDUCATION
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Youniverse Technologies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">YouTubers Portal</a>
          </li>
        </ul>
        <button className="btn btn-outline-light ml-3">Joining...</button>
      </div>
    </nav>
  );
};

export default Header;



// --------------
// Header.jsx
// import React from 'react';
// import "././../styles/Header.css"
// const Header = () => {
//     return (
//         <header className="header">
//             <div className="header-container">
//                 <a className="logo navbar-brand" href="/">
//                   <img src="/assets/header_logo.png" alt="Youniverse Logo" width="50" className="mr-2" />
//                   YOUNIVERSE EDUCATION
//                 </a>
//                 <nav className="nav">
//                     <ul>
//                         <li><a href="#">Youniverse Technologies</a></li>
//                         <li><a href="#">YouTubers Portal</a></li>
//                         <li><a href="#" className="btn get-started">Get Started</a></li>
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Header;