
import v1 from '/src/assets/v1.mp4'

function Landing(){
    return (
        <div className=" w-full h-screen bg-zinc-900 pt-0">
       

            <video src={v1} autoPlay muted loop className='bg-cover'></video>


            <div className='text mt-56 px-20 absolute top-0'>

                {["we create",,"personlized","learning expernices."].map((item,index)=>(
                 <div key={index} className='masker m-1'>
                 <h1 className='leading-none uppercase text-7xl font-semibold '>{item}</h1>
             </div>   
))}
            </div>
            

           
     
           


           </div>

        
           
           
       



    )

}
export default Landing