import React, { useEffect, useRef } from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import NewSegment from "./components/NewSegment";
import Game from "./components/Game";
import StarCourse from "./components/StarCourse";


function App() {
  

   return (
      
         <div className="w-full h-full bg-zinc-900 text-white">
            <Navbar />
            <Landing />
            <Marquee />
            <NewSegment />
            <Game />
            <StarCourse />
         </div>
      
   );
}

export default App;
