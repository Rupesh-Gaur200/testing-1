import Webcam from "react-webcam"
import { useRef, useState, useCallback } from "react"

// Note: you do not need to import @tensorflow/tfjs here.

import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';



// Load the model.


// Classify the image.



function CusTomWebCam() {

  const webcamRef = useRef(null)

  const [getimage, setImage] =useState(null);


  const [oncam, setCam] = useState(false)


  function activateCam() {
    if (oncam) {
      console.log("CameraActivated")
      setCam(false)
      const bt = document.getElementById("btn")
      const text = "OnWebCam"
      bt.innerText = text

    }

    else {

      console.log("Camera Is Not Activated")
      setCam(true)
      const bt = document.getElementById("btn")
      const text = "offWebCam"
      bt.innerText = text
    }
  }




  
     const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    console.log(imageSrc)
    lol()
    
  }, [webcamRef,setImage]);


  const videoConstraints = {
   
    facingMode: "user"
  };
  
  async function lol(){
    const model = await mobilenet.load();
    const img = document.getElementById('img');
    console.log(img)
    const predictions = await model.classify(img);
    if(model){
      console.log("Model Loaded Successfully")
      console.log('Predictions: ');
      console.log(predictions);
      if(predictions){
        console.log("Model Predicted the values")
      }
      
    }
    else{
      console.log("Model is not loaded")
    }
  }
  
    
  // const capture = useCallback(() => {
  //     const imageSrc = webcamRef.current.getScreenshot();
  //     setIm(imageSrc);
  //   }, [webcamRef]);

  return (
    <div className="border-2 border-green-500 my-40 mx-20">

      <div>
        {oncam ?
         <Webcam
         audio={false}
         ref={webcamRef}
         screenshotFormat="image/jpeg"
         videoConstraints={videoConstraints}
       />:
          console.log("Click on Capture photo button")}
      </div>



      <div className=" border-2 border-red-500 flex gap-24 ">

        <button id="btn" onClick={activateCam}>OnWebCam</button>

        <button onClick={capture}>Capture ScreenShot</button>
      </div>
      <div>
        <img id="img" src={getimage}></img>
      </div>


    </div>
  )
}

export default CusTomWebCam