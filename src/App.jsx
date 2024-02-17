
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

import Marquee from "./components/Marquee";


function App() {


  return (
    <>
     <div className="w-full h-screen bg-zinc-900 text-white">
         <Navbar></Navbar>
      
         <Landing></Landing>

         {/* <Marquee></Marquee> */}
         </div>
    </>
  )
}

export default App
