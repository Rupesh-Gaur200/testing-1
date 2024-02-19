

function Marquee(){
    return(
       
        <div className="rounded-t-2xl w-full h-48 bg-emerald-800 ">
               
               <div className="flex gap-8 mx-4">
              {["Ochi's let's begin","Ochi's let's begin"].map((item,index)=>(
            
                <h1 key={index} className="pt-10 text-8xl">{item} </h1>
              )) }
              </div>
      
        </div>
    )
}
export default Marquee