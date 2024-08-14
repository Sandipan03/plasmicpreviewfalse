/**@format */
import React, { Suspense , useEffect, useState} from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Spline = React.lazy(() => import("@splinetool/react-spline"));
function Sample({className}) {
  const [model, setmodel] = useState(false)
  const [loaded, setloaded] = useState(false)
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setTimeout(()=>{setloaded(true)}, 3000)
      // do something else
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
  }
},  []);
useEffect(() => {
  setmodel(true)
}, [loaded])

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
  const handleClick  =()=>{
    gsap.to("h1",{
      duration: 0.5,
      y: -200,
      opacity: 0,
      
    })
    gsap.to("button",{
      duration: 0.5,
      y: -200,
      opacity: 0,
      delay: 0.2
    })
  }
  return (
    
      <div className={className} style={{ width: "100vw" , display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <h1 style={{textAlign: "center", color: "white", zIndex:"1"}}>Hello World</h1>
        <button style={{backgroundColor:"white", color:"black",borderRadius:"5px", height:"30px", marginBottom: "100px",zIndex:"1"}} onClick={handleClick}>Open</button>
        <Suspense fallback={<div></div>}>
        {model && <Spline scene='https://prod.spline.design/6Re8UFR1WXy53RFH/scene.splinecode' style={{width:"100%", height: "100vh", position:"absolute", zIndex:"0"}}/>}
        </Suspense>
    </div>
    
  )
}

export default Sample