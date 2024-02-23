
import {useState} from 'react';
import VideoContainer from './VideoContainer';

function StarCourse(){
 
     const[search , setSearch]=useState("")
     
     function handleSubmit(e){
        e.preventDefault()
        
        setSearch("")
        console.log(search)
     }

     



    return (
        <div className=" w-full h-full  bg-zinc-900 ">

              <div className="   my-40 mx-20  ">
                <form onSubmit={handleSubmit} className=' flex mx-[340px] gap-8'>
                <input   type="text" placeholder='Search Videos...' value={search} onChange={(e)=>{setSearch(e.target.value)}} className="  w-[650px]  pl-4 pt-1 pb-1 rounded-lg bg-slate-600  ">
        
                </input>
                <button type='submit'  className='mr-5 pl-2 pt-1 pb-1 pr-2 rounded-lg bg-purple-700 text-slate-200'>Search</button>
                </form>
              </div>
          

           <VideoContainer></VideoContainer>



        </div>
    )
}

export default StarCourse