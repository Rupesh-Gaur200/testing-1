
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

import Marquee from "./components/Marquee";
import NewSegment from "./components/NewSegment";


function App() {


  return (
    <>
     <div className="w-full h-screen bg-zinc-900 text-white">
         <Navbar></Navbar>
      
         <Landing></Landing>

           <Marquee></Marquee>  
           <NewSegment></NewSegment>
         </div>
    </>
  )
}

export default App
