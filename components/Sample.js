/**@format */
import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
function Sample({className}) {
  return (
    
      <div className={className} style={{ width: "100vw" }}>
        <Suspense fallback={<h1>Loading....</h1> }>
        <Spline scene='https://prod.spline.design/6Re8UFR1WXy53RFH/scene.splinecode' />
        </Suspense>
    </div>
    
  )
}

export default Sample