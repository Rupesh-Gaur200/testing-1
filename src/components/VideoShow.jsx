


function VideoShow(){
    return (
        <div className=" py-10 px-8 w-full h-full grid grid-cols-4  gap-4">
            {["/src/assets/image2.jpg","/src/assets/image1.jpg","/src/assets/image3.jpg","/src/assets/image1.jpg","/src/assets/image2.jpg","/src/assets/image3.jpg","/src/assets/image2.jpg","/src/assets/image1.jpg","/src/assets/image3.jpg"].map((item ,index)=>(
                 <div key={index} className={`w-[350px]  h-[250px] py-10 px-10  `}  >
                    <img className="w-full h-full" src={item}></img>
                 </div>
            ))}
 
 
        </div>
    )

}

export default VideoShow