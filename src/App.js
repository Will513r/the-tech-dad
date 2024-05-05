import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage.js";
import UserPage from "./pages/UserPage.js";


 function App() {
  return (
    
    <Router>
    <Routes>
    
      <Route exact path="/" element={<HomePage/>} />
      <Route path="/:id" element={<UserPage/>} />
    </Routes>
    </Router>
  );
}

// function Video({ video }) {
//   return (
//     <div>
//       <Thumbnail video={video} />
//       <a href={video.url}>
//         <h3>{video.title}</h3>
//         <h1>Hello World!</h1>
//         <p>{video.description}</p>
//       </a>
//       <LikeButton video={video} />
//     </div>
//   );
// }

export default App;
