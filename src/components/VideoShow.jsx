

function VideoShow({ d }) {




    return (
        <div className=" px-8 w-full h-full grid grid-cols-4 gap-12 ">
            {d.map((items, index) => (
               <div key={index} className={`rounded-lg shadow-lg  w-[250px] h-[350px] mt-10 mb-10 bg-zinc-800 hover:scale-110 delay-75 hover:cursor-pointer `}>
                  <img  className="rounded" src={items.snippet.thumbnails.high.url}></img>
                   <p className="text-wrap text-semibold pl-3 pt-3 pr-3 overflow-hidden">{items.snippet.description}</p> 
             </div>
             
             
            ))}


        </div>
    )

}

export default VideoShow