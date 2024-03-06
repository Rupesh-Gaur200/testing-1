import Webcam from "react-webcam"
import { useRef, useState, useCallback } from "react"
function CusTomWebCam() {

  const webcamRef = useRef(null)

  const [getimage, setImage] = useState(null)


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

  // const capture = useCallback(() => {
  //     const imageSrc = webcamRef.current.getScreenshot();
  //     setIm(imageSrc);
  //   }, [webcamRef]);

  return (
    <div className="border-2 border-green-500 my-40 mx-20">

      <div>
        {oncam ?
          <Webcam></Webcam> :
          console.log("Click on Capture photo button")}
      </div>



      <div className=" border-2 border-red-500 ">

        <button id="btn" onClick={activateCam}>OnWebCam</button>
      </div>

    </div>
  )
}

export default CusTomWebCam