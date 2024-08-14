/**@format */
import React, { Suspense , useState} from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Spline = React.lazy(() => import("@splinetool/react-spline"));
function Sample({className}) {
  const [model, setmodel] = useState(false)
  useGSAP(()=>{
    gsap.from("h1",{
      duration: 0.5,
      y: 200,
      opacity: 0,
      delay: 0.3
    })
    gsap.from("button",{
      duration: 0.5,
      y: 200,
      opacity: 0,
      delay: 0.7
    })
  })
  return (
    
      <div className={className} style={{ width: "100vw" , display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <h1 style={{textAlign: "center", color: "white"}}>Hello World</h1>
        <button style={{backgroundColor:"white", color:"black",borderRadius:"5px", height:"30px", marginBottom: "100px"}} onClick={()=>{setmodel(!model)}}>Open</button>
        <Suspense fallback={<div></div>}>
        {model && <Spline scene='https://prod.spline.design/6Re8UFR1WXy53RFH/scene.splinecode' style={{width:"100%", height: "100vh", position:"absolute"}}/>}
        </Suspense>
    </div>
    
  )
}

export default Sample