import React from 'react'
import './App.css';
import Header_bar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import About from "./pages/About";
import Projects from "./pages/Projects";
import Youtube from "./pages/Youtube";
import { BrowserRouter } from "react-router-dom";





 function App() {
 
  return (
    <>
      <Header_bar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
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
