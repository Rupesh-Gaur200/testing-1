
import v1 from '/src/assets/v1.mp4'

function Landing(){
    return (
        <div className="">
        <video autoPlay loop muted className="background-video z-1">
                <source src={v1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>



    )

}
export default Landing