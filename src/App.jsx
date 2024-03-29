import React, { useEffect, useRef } from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import NewSegment from "./components/NewSegment";
import Game from "./components/Game";
import StarCourse from "./components/StarCourse";
import LocomotiveScroll from 'locomotive-scroll';
import Docs from "./components/Docs";
import Footer from "./components/Footer";
import CusTomWebCam from "./components/CusTomWebCam";
function App() {
  
   const locomotiveScroll = new LocomotiveScroll();
   return (
      
         <div className="w-full h-full bg-zinc-900 text-white">
            <Navbar />
          
            <Landing />
           
            <Marquee />
            <NewSegment />
            <Game />
            <StarCourse />
            <Docs></Docs>
            <Footer></Footer>
            <CusTomWebCam></CusTomWebCam>
         </div>
      
   );
}

export default App;
