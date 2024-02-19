

function Marquee(){
    return(
       
        <div className="rounded-t-3xl w-full h-48 bg-emerald-800 flex gap-8">
               
              {["Ochi's let's begin","Ochi's let's begin"].map((item,index)=>(
                <h1 key={index} className="pt-8 text-8xl">{item} </h1>
              )) }
              
      
        </div>
    )
}
export default Marquee