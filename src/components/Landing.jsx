
import v1 from '/src/assets/v1.mp4'

import img1 from'/src/assets/img1.jpg'
import { VscGitFetch } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";

import '@mediapipe/face_detection';
import '@tensorflow/tfjs-core';
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl';
import * as faceDetection from '@tensorflow-models/face-detection';
import Webcam from "react-webcam";
import { useRef , useState ,useCallback} from "react";
    


function Landing(){
    // const openMediaDevices = async (constraints) => {
    //     return await navigator.mediaDevices.getUserMedia(constraints);
    // }
    
    // try {
    //     const stream = openMediaDevices({'video':true,'audio':true});
    //     console.log('Webcam Accessed',stream);
        
    // } catch(error) {
    //     console.error('Please Give permission to access webcam and microphone.', error);
    // }

    // const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
    // const detectorConfig = {
    //   runtime: 'mediapipe', // or 'tfjs'
    // }
    // const detector = async ()=>{ await faceDetection.createDetector(model, detectorConfig);}
    // const faces = async()=> await detector.estimateFaces(image);
    // console.log(faces)

  

    return (
        <div data-scroll data-scroll-speed="-0.3" className=" w-full h-screen overflow-hidden  bg-zinc-900 bg-[url(/src/assets/img1.jpg)] bg-cover pt-1">
           

           {/* <video src={v1} autoPlay muted loop></video> */}
       

            <div  className='z-[23] text mt-56 px-20 '>


                {["we create",,"personlized","learning expernices."].map((item,index)=>(
                 <div   key={index} className='masker m-1'>
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
             <div className='animate-bounce w-28 h-18 mt-8 mx-[723px]'>
             <span className=' -mx-3 text-sm text-slate-400'>Scroll down</span>
                <IoIosArrowDown className=' pl-1 w-10'></IoIosArrowDown>
               
             </div>
         
               
       
     
         


           </div>

        
           
           
       



    )

}
export default Landing