import { motion } from "framer-motion"

function Marquee(){
    return(
       
        <div  data-scroll data-scroll-section data-scroll-speed='.1'    className=" rounded-t-2xl w-full h-72 bg-emerald-800  overflow-hidden ">
               
               <div  className="pt-8 border-t-2 border-b-2  border-white  mt-8 mb-8 flex  gap-10  overflow-hidden">
              {["Ochi's let's begin","Ochi's let's begin","Ochi's let's begin","Ochi's let's begin",].map((item,index)=>(
            
                <motion.h1 initial={{x:0}} animate={{x:"-110%"}} transition={{ease:"linear", repeat:Infinity, duration:7}}  key={index} className=" pt-4 pb-12 text-9xl  whitespace-nowrap">{item} </motion.h1>
              )) }
              </div>
      
        </div>
    )
}
export default Marquee