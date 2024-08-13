/**@format */
import React from 'react' 
import Spline from '@splinetool/react-spline';
function Sample({className}) {
  return (
    <div className={className} style={{ width: "100vw", height: "100vh" }}>
        <Spline scene='https://prod.spline.design/6Re8UFR1WXy53RFH/scene.splinecode' />
    </div>
  )
}

export default Sample