

import { useEffect, useState } from "react"


function Game(){

    const [rotation , setRotation]=useState(0)

useEffect (()=>{
window.addEventListener("mousemove",(e)=>{
  let x=e.clientX
  let y=e.clientY
 
  
  let posx = x-window.innerWidth/2 
  let posy =y-window.innerHeight/2 

  var angle=Math.atan2(posy,posx)*(180/Math.PI)
  console.log(angle)
  setRotation(angle-180)

})

})


    return(
        
        <div className="w-full h-screen overflow-hidden">
        
               <div className=" relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">


                      <div className=" flex justify-center gap-10 absolute top-1/2  left-1/2 -translate-x-[50%] -translate-y-[80%]  ">
                        <div className=" flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-zinc-200 ">
                        <div className=" relative w-[8vw] h-[8vw] rounded-full bg-black ">


                          <div style={{transform: `translate(-50%,-50%) rotate(${rotation}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ">

                          
                        <div className="w-[2vw] h-[2vw] rounded-full bg-zinc-200 ">
                              

                              </div>
                              </div>
                              </div>

                        </div>
                        <div className=" flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-zinc-200 ">
                        <div className=" relative flex justify-center items-center w-[8vw] h-[8vw] rounded-full bg-black ">


                          <div style={{transform: `translate(-50%,-50%) rotate(${rotation}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   w-full h-10">
                        <div className="w-[2vw] h-[2vw] rounded-full bg-zinc-200 ">
                              

                              </div>
                              </div>
                              </div>
                        </div>
                      </div>




               </div>

        </div>



          
    )
}

export default Game