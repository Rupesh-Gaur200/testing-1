
import {useState} from 'react';
import VideoContainer from './VideoContainer';
import axios from 'axios';
function StarCourse(){
 
     const[search , setSearch]=useState("")
     const[d, setD] =useState([])
     const[durl , setdurl] =useState([])

     function handleSubmit(e){
        e.preventDefault()
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDjIbC7qoyRJFTTR7UfDCR0V8ccHTn5aMw&part=snippet&q=${search}&maxResults=36`)
        .then((res)=>{
                const result= res.data.items
                setD(result)
             })
       

     
      

     }

     



    return (
        <div className=" w-full  bg-zinc-900 ">

              <div className="    mt-40 mb-20 mx-20  ">
                <form onSubmit={handleSubmit} className=' flex mx-[340px] gap-8'>
                <input   type="text" placeholder='Search Videos...' value={search} onChange={(e)=>{setSearch(e.target.value)}} className="  w-[650px]  pl-4 pt-1 pb-1 rounded-lg bg-slate-600  ">
        
                </input>
                <button type='submit'  className='mr-5 pl-2 pt-1 pb-1 pr-2 rounded-lg bg-purple-700 text-slate-200'>Search</button>
                </form>
              </div>
          

           <VideoContainer d={d} ></VideoContainer>



        </div>
    )
}

export default StarCourse