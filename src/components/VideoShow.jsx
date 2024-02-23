

function VideoShow({d}){




    return (
        <div className=" px-8 w-full h-full grid grid-cols-4  gap-4">
            {d.map((items ,index)=>(
                 <div key={index} className={`w-[350px]  h-[250px] py-10 px-10  `}  >
                    <img className="w-full h-full" src={items.snippet.thumbnails.high.url}></img>
                 </div>
            ))}
 
 
        </div>
    )

}

export default VideoShow