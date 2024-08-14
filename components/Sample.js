/**@format */
import React, { Suspense , useState} from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Spline = React.lazy(() => import("@splinetool/react-spline"));
function Sample({className}) {
  const [model, setmodel] = useState(false)
  useGSAP(()=>{
    gsap.from("h1",{
      duration: 1,
      y: 200,
      opacity: 0,
      delay: 1
    })
    gsap.from("button",{
      duration: 1,
      y: 200,
      opacity: 0,
      delay: 2
    })
  })
  return (
    
      <div className={className} style={{ width: "100vw" , display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <h1 style={{textAlign: "center"}}>Hello World</h1>
        <button style={{backgroundColor:"black", color:"white",borderRadius:"5px", height:"30px", marginBottom: "100px"}} onClick={()=>{setmodel(!model)}}>Open</button>
        <Suspense fallback={<h1>Loading...</h1> }>
        {model && <Spline scene='https://prod.spline.design/6Re8UFR1WXy53RFH/scene.splinecode' style={{width:"50%", height: "50%"}}/>}
        </Suspense>
    </div>
    
  )
}

export default Sample