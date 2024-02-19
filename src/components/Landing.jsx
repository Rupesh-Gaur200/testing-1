
import v1 from '/src/assets/v1.mp4'

function Landing(){
    return (
        <div className=" w-full h-screen bg-zinc-900 pt-1">
           

           {/* <video src={v1} autoPlay muted loop></video> */}
       

            <div className='z-[23] text mt-56 px-20'>


                {["we create",,"personlized","learning expernices."].map((item,index)=>(
                 <div key={index} className='masker m-1'>
                 <h1 className='leading-none uppercase text-7xl font-semibold '>{item}</h1>
             </div>  
              
))}                      
                     
               

            </div>

             <div className='border-t-2 border-zinc-600 mt-32 px-20 flex justify-around'>
             {["Get started","let'play"].map((item,index)=>(
                <a className="pt-12 capitalize"key={index}>{item}</a>
               ))}
               <div className='mt-10 border-zinc-600 border-2 rounded-md '>
                <button className='pt-2 pb-2 pr-2 pl-2 capitalize'>Get register</button>
               </div>
             </div>
         
               
       
     
           


           </div>

        
           
           
       



    )

}
export default Landing